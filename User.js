var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  city: String,
  contact_number:Number,
  gender:String

});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');