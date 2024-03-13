const mongoose = require('mongoose');
const rollSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
    },

    image: {
        type: String,
        minlength: 2,
        maxlength: 2000,
    }
    ,
    proteins: {
        type: String,
        minlength: 1,
        maxlength: 5,
    },
    fats: {
        type: String,
        minlength: 1,
        maxlength: 5,
    },
    carbohydrates: {
        type: String,
        minlength: 1,
        maxlength: 5,
    },
    availability: {
        type: Boolean,
        default: true,
    },
     cost: {
        type: String,
        minlength: 3,
        maxlength: 10,
    },
    sale: {
        type: Number,
        default: 0,
    }
});
module.exports = mongoose.model('roll', rollSchema);