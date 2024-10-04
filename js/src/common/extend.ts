import Extend from 'flarum/common/extenders';
import FingerprintRecord from './models/FingerprintRecord';
export default [
    new Extend.Store()
        .add(FingerprintRecord.TYPE, FingerprintRecord)
];