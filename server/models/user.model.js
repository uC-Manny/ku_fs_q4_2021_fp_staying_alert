const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const User = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  user_name: {type:String, required: require_active, unique: unique_active},
  first_name: {type:String, required: require_active},
  last_name: {type:String, required: require_active},
  email_addr: {type:String, required: require_active, unique: unique_active},
  password_hash: {type:String, required: require_active},
  emergency_msg: {type:String},
  emer_person_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  emer_group_id: {type:mongoose.Schema.Types.ObjectId, ref:"GroupsData"},
  loc_interval_in_mins: {type:Number},
}, 
{collection: 'user_account', timestamps: true}
)

const user_model = mongoose.model('UserData', User);

module.exports = user_model;