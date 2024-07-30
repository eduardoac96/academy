const mongoose = require('mongoose');
const { emitWarning } = require('process');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;