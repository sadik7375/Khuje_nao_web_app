const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    fullname: {
        type: String,

        unique: false,

    },
    email: {
        type: String,

        unique: false,
    },
    phone: {
        type: String,

        unique: false,
    },
    address: {
        type: String,

        unique: false,
    },
    productcategory: {
        type: String,

        unique: false,
    },

    productref: {
        type: String,

        unique: false,
    }
});

const oderModel = mongoose.model('oderdetails', OrderSchema);


module.exports = oderModel;