const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    message:{
        type:String,
        required:true
    }
},{timestamps:true});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;