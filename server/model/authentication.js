const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
        name: {
            type: String,

        },
        email: {
            type: String,

        },
        password: {
            type: String,

        }





    }


)
const userModel = mongoose.model('signup', signupSchema);
module.exports = userModel;