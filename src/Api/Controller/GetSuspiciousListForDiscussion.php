<?php

namespace Xypp\FingerprintRecorder\Api\Controller;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Discussion\Discussion;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Illuminate\Database\Query\Expression;
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
            ->whereExists(function ($query) use ($users) {
                $grammar = $query->getGrammar();
                $query->from("fingerprint_record as fgr2")
                    ->whereRaw($grammar->wrapTable("fgr2") . "." . $grammar->wrap("all") . " = " . $grammar->wrapTable("fingerprint_record") . "." . $grammar->wrap("all"))
                    ->whereRaw($grammar->wrapTable("fgr2") . ".user_id != " . $grammar->wrapTable("fingerprint_record") . ".user_id")
                    ->whereIn("fgr2.user_id", $users->pluck("user_id"));
            })->orderBy("all")->groupBy("user_id");
        return $suspicious->get();
    }

}