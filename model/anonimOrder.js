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
    }]
    ,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'anonimUser',
    }
});
module.exports = mongoose.model('anonimOrder', anonimOrderSchema);