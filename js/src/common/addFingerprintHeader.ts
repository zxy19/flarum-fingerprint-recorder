import { extend, override } from 'flarum/common/extend';
import type ForumApplication from 'flarum/forum/ForumApplication';
import type AdminApplication from 'flarum/admin/AdminApplication';
import { ClientJS } from "clientjs";
export function addFingerprintHeader() {
    override(m, "request", (o, options) => {
        extend(options, 'config', (_: undefined, xhr: XMLHttpRequest) => {
            xhr.setRequestHeader('X-FRONTEND-FINGER', new ClientJS().getFingerprint() + "");
        });
        return o(options);
    });
}