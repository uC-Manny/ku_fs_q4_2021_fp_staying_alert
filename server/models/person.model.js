const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const Person = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  user_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData", required: require_active},
  first_name: {type:String, required: require_active},
  last_name: {type:String, required: require_active},
  pref_name: {type:String},
  email_addr: {type:String, required: require_active},
  phone: {type:String, required: require_active},
  check_in_id_arr: [{type:mongoose.Schema.Types.ObjectId, ref:"Check_InData"}],
  check_in_confirm_arr: [{type:mongoose.Schema.Types.ObjectId, ref:"PersonData"}],
  check_in_group_id: {type:mongoose.Schema.Types.ObjectId, ref:"GroupsData"},
  check_in_person_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  assist_group_id: {type:mongoose.Schema.Types.ObjectId, ref:"GroupsData"},
  assist_person_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  assist_id: {type:mongoose.Schema.Types.ObjectId, ref:"AssistanceData"},
  assist_confirm_arr: [{type:mongoose.Schema.Types.ObjectId, ref:"PersonData"}],
  person_is_self: {type:Boolean},
  removed: {type:Boolean},
}, 
{collection: 'person', timestamps: true}
)

const person_model = mongoose.model('PersonData', Person);

module.exports = person_model;