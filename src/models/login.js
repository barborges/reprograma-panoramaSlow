const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    email: { type: String },
    password: { type: String }

}, {
    versionKey: false
});

const login = mongoose.model('login', loginSchema);

module.exports = login;

