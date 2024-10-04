import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';

export default class FingerprintRecord extends Model {
  static TYPE = "fingerprint-records";
  user = Model.hasOne<User>("user");
  finger = Model.attribute<number>("finger");
  userAgent = Model.attribute<string>("user_agent_text");
  userAgentHash = Model.attribute<string>("user_agent");
  ip = Model.attribute<string>("ip");
  count = Model.attribute<number>("count");
  createdAt = Model.attribute<Date>("created_at",Model.transformDate as any);
  updatedAt = Model.attribute<Date>("updated_at",Model.transformDate as any);
}