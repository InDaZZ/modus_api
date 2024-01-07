const mongoose = require('mongoose');

const adminUserSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        default: 'admin',
    },
    password: {
        type: String,
        minlength: 4,
        maxlength: 50,
    },
    admin: {
        type: Boolean,
        default: true,
    }
});
module.exports = mongoose.model('adminUser', adminUserSchema);
