<?php

namespace Xypp\FingerprintRecorder\Content;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;
use Xypp\FingerprintRecorder\FingerprintRecord;

class AddSuspicious
{
    public function __invoke(BasicUserSerializer $serializer, User $user, $attributes)
    {
        if ($serializer->getActor()->hasPermission("xypp-fingerprint-recorder.view")) {
            $finger = FingerprintRecord::where("user_id", $user->id)->first();
            if ($finger) {
                $count = FingerprintRecord::where("user_id", "!=", $user->id)->where("all", $finger->all)->count();
                $attributes["fingerprint_suspicious"] = $count;
                $attributes["fingerprint_count"] = FingerprintRecord::where("user_id", $user->id)->count();
            }
        }
        return $attributes;
    }
}