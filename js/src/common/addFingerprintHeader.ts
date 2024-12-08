import { extend, override } from 'flarum/common/extend';
import type ForumApplication from 'flarum/forum/ForumApplication';
import type AdminApplication from 'flarum/admin/AdminApplication';
import { ClientJS } from "clientjs";
export function addFingerprintHeader() {
    let fingerPrint = "";
    override(m, "request", (o, options) => {
        extend(options, 'config', (_: undefined, xhr: XMLHttpRequest) => {
            if (!fingerPrint) {
                fingerPrint = new ClientJS().getFingerprint() + "";
                // console.log("Calculated fingerprint of" + fingerPrint);
            }
            xhr.setRequestHeader('X-FRONTEND-FINGER', fingerPrint);
        });
        return o(options);
    });
}