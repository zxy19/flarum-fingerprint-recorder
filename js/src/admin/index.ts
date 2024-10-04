import app from 'flarum/admin/app';
import { addFingerprintHeader } from '../common/addFingerprintHeader';

app.initializers.add('xypp/flarum-fingerprint-recorder', () => {
  addFingerprintHeader();
  app.extensionData
    .for('xypp-fingerprint-recorder')
    .registerSetting({
      setting: 'xypp-fingerprint-recorder.max_count',
      type: 'number',
      label: app.translator.trans('xypp-fingerprint-recorder.admin.max_count')
    })
    .registerSetting({
      setting: 'xypp-fingerprint-recorder.use_proxy',
      type: 'boolean',
      label: app.translator.trans('xypp-fingerprint-recorder.admin.use_proxy')
    })
    .registerPermission({
      permission: 'xypp-fingerprint-recorder.view',
      label: app.translator.trans('xypp-fingerprint-recorder.admin.view'),
      icon: 'fas fa-fingerprint'
    }, 'moderate');
  ;
});
