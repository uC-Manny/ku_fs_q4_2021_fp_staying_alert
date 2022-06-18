const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const Check_In = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  id_num : {type:Number, required: require_active, unique: unique_active},
  check_in_name: {type:String, required: require_active},
  owner_person_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  start_date: {type:Date},
  end_date: {type:Date},
  start_time: {type:Date},
  end_time: {type:Date},
  frequency_qty: {type:Number},
  frequency_units: {type:String},
  active: {type:Boolean},
  contact_person: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  contact_group: {type:mongoose.Schema.Types.ObjectId, ref:"GroupsData"},
  action_plan: {type:String, required: require_active},
}, 
{collection: 'check_in', timestamps: true}
)

const check_in_model = mongoose.model('Check_InData', Check_In);

module.exports = check_in_model;