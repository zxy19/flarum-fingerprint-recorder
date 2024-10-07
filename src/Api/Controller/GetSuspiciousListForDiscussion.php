<?php

namespace Xypp\FingerprintRecorder\Api\Controller;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Discussion\Discussion;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Xypp\FingerprintRecorder\FingerprintRecord;
use Xypp\FingerprintRecorder\Api\Serializer\FingerprintRecordSerializer;
class GetSuspiciousListForDiscussion extends AbstractListController
{
    public $serializer = FingerprintRecordSerializer::class;
    public $include = ["user"];
    function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan("xypp-fingerprint-recorder.view");

        $id = Arr::get($request->getQueryParams(), "id");
        $discussion = Discussion::findOrFail($id);
        $users = $discussion->participants()->select("user_id")->get();
        $suspicious = FingerprintRecord::whereIn("user_id", $users->pluck("user_id"))
            ->whereExists(function ($query) {
                $query->from("fingerprint_record as fgr2")
                    ->where("fgr2.all", "fingerprint_record.all")
                    ->where("fgr2.user_id", "!=", "fingerprint_record.user_id");
            });
        return $suspicious->get();
    }

}