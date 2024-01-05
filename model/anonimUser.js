const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { userCounter } = require('../config')
const anonimUserSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        default: 'Гость',
    },
    phone: {
        type: String,
        minlength: 2,
        maxlength: 30,
    }
});
module.exports = mongoose.model('anonimUser', anonimUserSchema);

