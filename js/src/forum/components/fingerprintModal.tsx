import app from 'flarum/forum/app';
import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ManageNotes from '../../common/models/FingerprintRecord';
import Link from 'flarum/common/components/Link';
import User from 'flarum/common/models/User';
import Button from 'flarum/common/components/Button';
import FingerprintRecord from '../../common/models/FingerprintRecord';
import username from 'flarum/common/helpers/username'
import avatar from 'flarum/common/helpers/avatar'
import humanTime from 'flarum/common/helpers/humanTime';

function _trans(key: string, params: any) {
    return app.translator.trans(`xypp-fingerprint-recorder.forum.${key}`, params);
}
export default class fingerprintModal extends Modal<{
    getData: () => Promise<FingerprintRecord[]>,
    title: string
} & IInternalModalAttrs> {
    loading: boolean = true;
    data: FingerprintRecord[] = [];
    className(): string { return 'Modal Modal--large'; }
    title() {
        return this.attrs.title;
    }
    oncreate(vnode: any): void {
        super.oncreate(vnode);
        this.loading = true;
        this.attrs.getData().then(data => {
            this.data = data;
            this.loading = false;
            m.redraw();
        })
    }
    content() {
        if (this.loading)
            return <LoadingIndicator></LoadingIndicator>
        return <div className="Modal-body">
            {this.data.map(item => this.getLine(item))}
        </div>;
    }
    getLine(item: FingerprintRecord) {
        const user = item.user();
        return <div className="fingerprint-line">
            <div className='fingerprint-line-user'>
                {user && avatar(user, { "size": 24 })}
                {user && <Link href={app.route('user', { username: user.slug() })}>{username(user)}</Link>}
            </div>

            <div className='fingerprint-line-time-create'><i class="fas fa-clock"></i>{humanTime(item.createdAt())}</div>
            <div className='fingerprint-line-time-update'><i class="fas fa-clock"></i>{humanTime(item.updatedAt())}</div>

            <div className='fingerprint-line-count'>
                <i class="fas fa-plus"></i>
                {item.count()}
            </div>
            <div className='fingerprint-line-ip'>
                <i class="fas fa-network-wired"></i>
                {item.ip()}
            </div>
            <div className='fingerprint-line-finger'>
                <i class="fas fa-fingerprint"></i>
                {item.finger()}
            </div>
            <div className='fingerprint-line-ua'>
                <i class="fab fa-internet-explorer"></i>
                {item.userAgent()}
            </div>
        </div>;
    }
}