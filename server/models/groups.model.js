const mongoose = require('mongoose');
const require_active = false;
const unique_active = false;

const Group = new mongoose.Schema({
  id : {type:Number, required: require_active, unique: unique_active},
  id_num : {type:Number, required: require_active, unique: unique_active},
  group_name: {type:String, required: require_active},
  person_id_arr: [{type:mongoose.Schema.Types.ObjectId, ref:"PersonData"}],
  user_id: {type:mongoose.Schema.Types.ObjectId, ref:"UserData"},
  removed: {type:Boolean},
}, 
{collection: 'groups', timestamps: true}
)

const groups_model = mongoose.model('GroupsData', Group);

module.exports = groups_model;