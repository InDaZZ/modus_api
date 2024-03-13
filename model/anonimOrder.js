const mongoose = require('mongoose');
const anonimOrderSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        default: 'заказ',
    },

    products: [{
        type: String,
        minlength: 2,
        maxlength: 60,
        required: true,
    }]
    ,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'anonimUser',
    },
    phone: {
        type: String,
    }
});
module.exports = mongoose.model('anonimOrder', anonimOrderSchema);