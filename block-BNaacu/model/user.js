let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : String,
    email:String,
    age: Number
})

module.exports = mongoose.model('User', userSchema);