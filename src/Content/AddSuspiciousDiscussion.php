<?php

namespace Xypp\FingerprintRecorder\Content;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\User\User;
use Xypp\FingerprintRecorder\FingerprintRecord;

class AddSuspiciousDiscussion
{
    public function __invoke(DiscussionSerializer $serializer, Discussion $discussion, $attributes)
    {
        if ($serializer->getActor()->hasPermission("xypp-fingerprint-recorder.view")) {
            $users = $discussion->participants()->select("user_id")->get();
            $count = FingerprintRecord::whereIn("user_id", $users->pluck("user_id"))
                ->whereExists(function ($query) {
                    $query->from("fingerprint_record as fgr2")
                        ->where("fgr2.all", "fingerprint_record.all")
                        ->where("fgr2.user_id", "!=", "fingerprint_record.user_id");
                })->count();
            $attributes["fingerprint_suspicious"] = $count;
        }
        return $attributes;
    }
}