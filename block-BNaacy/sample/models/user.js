let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    age: Number,
}, {timestamps: true});

let User = mongoose.model('user', userSchema);

module.exports = User;