import app from 'flarum/forum/app';
import { addFingerprintHeader } from '../common/addFingerprintHeader';
import Button from 'flarum/common/components/Button';
import PostControls from 'flarum/forum/utils/PostControls';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import ItemList from 'flarum/common/utils/ItemList';
import Composer from 'flarum/forum/components/Composer';
import LinkButton from 'flarum/common/components/LinkButton';
import UserControls from 'flarum/forum/utils/UserControls';
import { extend } from 'flarum/common/extend';
import fingerprintModal from './components/fingerprintModal';
import FingerprintRecord from '../common/models/FingerprintRecord';
import User from 'flarum/common/models/User';
function getFingerForUser(id: string) {
  return () => {
    return app.store.find<FingerprintRecord[]>(FingerprintRecord.TYPE, id as any);
  }
}
function getSuspiciousForUser(id: string) {
  return async () => {
    return app.store.pushPayload<FingerprintRecord[]>(await app.request<any>({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + `/fingerprint-records/${id}/suspicious`
    }));
  }
}
function addItem(items: ItemList<any>, userId: number | string | false | null | undefined) {
  if (userId && app.forum.attribute('xypp-fingerprint-recorder.view')) {
    const user = app.store.getById<User>('users', userId + "");
    items.add('fingerprint-recorder-fingerprint', Button.component({
      icon: 'fas fa-users-cog',
      className: 'Button Button--link',
      onclick: () => {
        app.modal.show(fingerprintModal, {
          getData: getFingerForUser(userId as string),
          title: app.translator.trans('xypp-fingerprint-recorder.forum.finger_title')
        })
      }
    },
      app.translator.trans('xypp-fingerprint-recorder.forum.show', { cnt: (user && user.attribute('fingerprint_count')) || 0 })))
    items.add('fingerprint-recorder-suspicious', Button.component({
      icon: 'fas fa-exclamation-triangle',
      className: 'Button Button--link',
      onclick: () => {
        app.modal.show(fingerprintModal, {
          getData: getSuspiciousForUser(userId as string),
          title: app.translator.trans('xypp-fingerprint-recorder.forum.suspicious_title')
        })
      }
    },
      app.translator.trans('xypp-fingerprint-recorder.forum.suspicious', { cnt: (user && user.attribute('fingerprint_suspicious')) || 0 })))
  }
}

app.initializers.add('xypp/flarum-fingerprint-recorder', () => {
  addFingerprintHeader();

  extend(PostControls, "moderationControls", function (items, post) {
    const user = post.user();
    const userId = user && user.id();
    addItem(items, userId);
  })
  extend(DiscussionControls, 'moderationControls', function (items, discussion) {
    const user = discussion.user();
    const userId = user && user.id();
    addItem(items, userId);
  });
  extend(UserControls, 'moderationControls', (items, user) => {
    if (user) {
      addItem(items, user.id());
    }
  });
});
