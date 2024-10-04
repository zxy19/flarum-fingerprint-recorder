<?php

namespace Xypp\FingerprintRecorder\Api\Controller;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Xypp\FingerprintRecorder\FingerprintRecord;
use Xypp\FingerprintRecorder\Api\Serializer\FingerprintRecordSerializer;
class GetSuspiciousList extends AbstractListController
{
    public $serializer = FingerprintRecordSerializer::class;
    public $include = ["user"];
    function data(ServerRequestInterface $request, $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan("xypp-fingerprint-recorder.view");

        $id = Arr::get($request->getQueryParams(), "id");
        $ownFingerPrints = FingerprintRecord::where("user_id", $id)->get();

        $suspicious = FingerprintRecord::whereIn("all", $ownFingerPrints->pluck("all"))->where("user_id", "!=", $id);
        return $suspicious->get();
    }

}