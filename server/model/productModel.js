const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    productname: {
        type: String,
        unique: false,
    },
    name: {
        type: String,
        unique: false,
    },
    email: {
        type: String,
        unique: false,
    },
    phonenumber: {
        type: String,
        unique: false,
    },
    location: {
        type: String,
        unique: false,
    },
    category: {
        type: String,
        unique: false,
    },
    price: {
        type: String,
        unique: false,
    },
    description: {
        type: String,
        unique: false,
    },
    photo: {
        data: Buffer, // binary data of the photo
        contentType: String // MIME type of the photo
    }
});

const productModel = mongoose.model('products ', UserSchema);

module.exports = productModel;