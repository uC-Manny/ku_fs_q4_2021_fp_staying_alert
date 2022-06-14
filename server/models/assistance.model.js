const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const Assistance = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  user_id: {type:mongoose.Schema.Types.ObjectId, ref:"UserData"},
  person_2_assist_id: {type:mongoose.Schema.Types.ObjectId, ref:"PersonData"},
  critial_info_msg: {type:String, required: require_active},
  removed: {type:Boolean},
}, 
{collection: 'assistance', timestamps: true}
)

const assistance_model = mongoose.model('AssistanceData', Assistance);

module.exports = assistance_model;