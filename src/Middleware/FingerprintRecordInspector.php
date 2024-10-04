<?php

namespace Xypp\FingerprintRecorder\Middleware;
use Carbon\Carbon;
use Flarum\Foundation\ValidationException;
use Flarum\Http\RequestUtil;
use Flarum\Locale\Translator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Xypp\FingerprintRecorder\FingerprintRecord;

class FingerprintRecordInspector implements MiddlewareInterface
{
    private $settings;
    private $translator;
    public function __construct(SettingsRepositoryInterface $settings, Translator $translator)
    {
        $this->settings = $settings;
        $this->translator = $translator;
    }
    function process(ServerRequestInterface $request, RequestHandlerInterface $handler): \Psr\Http\Message\ResponseInterface
    {
        $user = RequestUtil::getActor($request);
        if ($user->isGuest())
            return $handler->handle($request);

        $finger = $request->getHeaderLine('X-FRONTEND-FINGER');
        if (!$finger) {
            if (str_starts_with($request->getUri()->getPath(), "/api/")) {
                throw new ValidationException(["msg" => $this->translator->trans("xypp-fingerprint-recorder.api.no_fingerprint")]);
            }
        }

        $response = $handler->handle($request);
        if ($finger) {
            $ip = $this->IP($request);
            $userAgentTxt = $request->getHeaderLine("User-Agent");
            $userAgent = md5($userAgentTxt);
            $all = md5($finger . "|" . $ip . "|" . $userAgent);
            $model = FingerprintRecord::where("all", $all)->where("user_id", $user->id)->first();
            if (!$model) {
                if (
                    FingerprintRecord::where("user_id", $user->id)->whereBetween("created_at", [
                        Carbon::now()->subHours(24),
                        Carbon::now()
                    ])->count() > (int) ($this->settings->get("xypp-fingerprint-recorder.max_count") ?? 20)
                ) {
                    if (str_starts_with($request->getUri()->getPath(), "/api/")) {
                        throw new ValidationException(["msg" => $this->translator->trans("xypp-fingerprint-recorder.api.too_many_fingerprints")]);
                    }
                }
                $model = new FingerprintRecord([
                    "user_id" => $user->id,
                    "finger" => $finger,
                    "user_agent" => $userAgent,
                    "user_agent_text" => $userAgentTxt,
                    "ip" => $ip,
                    "all" => $all
                ]);
            }
            $model->count = ($model->count ?? 0) + 1;
            $model->updateTimestamps();
            $model->save();
        }
        return $response;
    }
    function IP(ServerRequestInterface $request): string
    {
        $forwarded = $request->getHeaderLine("X-Forwarded-For");
        if ($forwarded && ($this->settings->get("xypp-fingerprint-recorder.use_proxy") ?? true)) {
            return $forwarded;
        }

        return $request->getServerParams()['REMOTE_ADDR'];
    }
}