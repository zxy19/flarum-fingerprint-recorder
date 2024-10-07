<?php

/*
 * This file is part of xypp/flarum-fingerprint-recorder.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\FingerprintRecorder;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Http\RequestUtil;
use Xypp\FingerprintRecorder\Api\Controller\GetFingerprintList;
use Xypp\FingerprintRecorder\Api\Controller\GetSuspiciousList;
use Xypp\FingerprintRecorder\Api\Controller\GetSuspiciousListForDiscussion;
use Xypp\FingerprintRecorder\Content\AddSuspicious;
use Xypp\FingerprintRecorder\Content\AddSuspiciousDiscussion;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(AddSuspicious::class),
    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attributes(AddSuspiciousDiscussion::class),
    (new Extend\Middleware("api"))
        ->add(Middleware\FingerprintRecordInspector::class),
    (new Extend\Routes('api'))
        ->get('/fingerprint-records/{id}/suspicious', 'fingerprint-recorder.suspicious', GetSuspiciousList::class)
        ->get('/fingerprint-records/{id}', 'fingerprint-recorder.fingerprint', GetFingerprintList::class)
        ->get('/fingerprint-records-discussion/{id}/suspicious', 'fingerprint-recorder.discussion-suspicious', GetSuspiciousListForDiscussion::class),
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('xypp-fingerprint-recorder.view', function (ForumSerializer $serializer) {
            return RequestUtil::getActor($serializer->getRequest())->hasPermission('xypp-fingerprint-recorder.view');
        }),
    (new Extend\Settings())
        ->default('xypp-fingerprint-recorder.max_count', 20)
        ->default('xypp-fingerprint-recorder.use_proxy', true),
];
