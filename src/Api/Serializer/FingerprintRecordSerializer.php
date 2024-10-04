<?php

namespace Xypp\FingerprintRecorder\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Foundation\ValidationException;
use Xypp\FingerprintRecorder\FingerprintRecord;
class FingerprintRecordSerializer extends AbstractSerializer
{
    protected $type = 'fingerprint-records';
    public function getDefaultAttributes($record)
    {
        if (!$record instanceof FingerprintRecord) {
            throw new ValidationException(["message" => "\$model is not instance of Record"]);
        }
        return [
            "ip" => $record->ip,
            "finger" => $record->finger,
            "user_agent" => $record->user_agent,
            "user_agent_text" => $record->user_agent_text,
            "all" => $record->all,
            "count" => $record->count,
            "created_at" => $record->created_at,
            "updated_at"=> $record->updated_at,
        ];
    }
    public function user($payHistory)
    {
        return $this->hasOne($payHistory, BasicUserSerializer::class, 'user');
    }
}