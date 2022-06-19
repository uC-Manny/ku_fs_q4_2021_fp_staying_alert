const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const Transaction = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  id_num : {type:Number, required: require_active, unique: unique_active},
  //user_id: {type:mongoose.Schema.Types.ObjectId, ref:"UserData", required: require_active},
  user_id: {type:Number, required: require_active},
  trans_type: {type:String},
  message_sent: {type:String},
  //person_supported_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  person_supported_id: {type:Number, required: require_active},
  trans_date: {type:Date, required: require_active},
  //person_id_arr: [{type:mongoose.Schema.Types.ObjectId, ref:"PersonData"}],
  person_id_arr: [{type:Number, required: require_active}],
  system_gen_act_notes: {type:String},
}, 
{collection: 'transactions'}
)

const transactions_model = mongoose.model('TransactionsData', Transaction);

module.exports = transactions_model;