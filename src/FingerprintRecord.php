<?php

namespace Xypp\FingerprintRecorder;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property string $ip
 * @property int $finger
 * @property int $user_id
 * @property string $user_agent
 * @property string $user_agent_text
 * @property string $ip
 * @property string $all
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class FingerprintRecord extends AbstractModel
{
    public $timestamps = true;
    protected $dates = ['updated_at', 'created_at'];
    protected $table = 'fingerprint_record';
    protected $fillable = ['user_id', 'finger', 'user_agent', 'user_agent_text', 'ip', 'all'];
    public function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }
}