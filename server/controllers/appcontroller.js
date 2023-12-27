const productModel = require('../model/productModel');
const orderModel = require('../model/orderconfirmModel');
const authenticationModel = require('../model/authentication')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");



//athentication

function signup(req, res) {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    authenticationModel.findOne({ email: email })
        .then((existingUser) => {
            if (existingUser) {
                // Email already exists, return an error response
                return res.status(400).json({ error: "Email already exists" });
            }

            // Email is unique, proceed with hashing and saving the new user
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(501).json({ error: "Internal Server Error" });
                }

                const newUser = new authenticationModel({
                    name: name,
                    email: email,
                    password: hash,
                });

                // Save the new user to the database
                newUser.save()
                    .then(() => {
                        res.json({ success: "User registered successfully" });
                    })
                    .catch((saveErr) => {
                        console.error(saveErr);
                        res.status(500).json({ error: "Internal Server Error" });
                    });
            });
        })
        .catch((findErr) => {
            console.error(findErr);
            res.status(500).json({ error: "Internal Server Error" });
        });
}


//login function

// Find the user by email

function signin(req, res) {
    const { email, password } = req.body;

    // Find the user by email
    authenticationModel.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Compare the provided password with the stored hashed password
            bcrypt.compare(password, user.password, (err, result) => {
                if (err || !result) {
                    return res.status(401).json({ error: "Invalid credentials" });
                }

                // Generate a JWT token
                const token = jwt.sign({ userId: user._id, email: user.email, name: user.name }, 'qsakljhhhutrdfglkijh', { expiresIn: '1d' }, { httpOnly: true });
                // savetoken(token);

                // Send the token in the response
                res.json({ token: token, email: email });
                // res.json({ success: "login successfully done" });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
}








//---------------------------sell post function---------------------

// --------------------photo uplaod--------------------------









function postforsell(req, res) {

    const { productname, name, email, phonenumber, location, category, price, description, photo } = req.body;

    const product = new productModel(

        {
            productname: productname,
            name: name,
            email: email,
            phonenumber: phonenumber,
            location: location,
            category: category,
            // photo: req.file.filename,
            price: price,
            description: description


        }
    )
    product.save()
        .then((product) => {
            console.log(product);
            res.status(200).json({
                success: 'product successfully post'
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err: 'internal server error' });
        });


}



//---------------------------sell post function finish---------------------




//get api for projects
async function projects(req, res) {

    try {

        const projects = await productModel.find();

        res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }



}

//get api for projectdetails by id

async function projectdetails(req, res) {
    const ProjectId = req.params.id;
    try {

        const projects = await productModel.findById(ProjectId);

        if (!projects) {
            return res.status(404).json({ error: 'Not Found' });
        }
        res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}


//post api for oderconfirmation
function orderconfirm(req, res) {

    const { fullname, email, phone, address, productcategory, productref } = req.body;
    // photo: { data: Buffer.from('examplePhotoData', 'base64'), contentType: 'image/png' },
    const orderconfirm = new orderModel(

        {
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            productcategory: productcategory,
            productref: productref,




        }
    )
    orderconfirm.save()
        .then((oderdetails) => {
            console.log(oderdetails);
            res.status(200).json({
                success: 'order confirm successfully'
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err: 'internal server error' });
        });


}

//get api por admin panel table orderinfo 
async function orderinfo(req, res) {

    try {

        const orderdetails = await orderModel.find();

        res.status(200).json(orderdetails);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }




}

async function deleteorder(req, res) {
    const id = req.params.id;
    orderModel.findByIdAndDelete(id)
        .then(deletememberinfo => {
            if (deletememberinfo) {
                return res.status(200).json({ message: "order deleted" });
            }

        })
        .catch(err => {
            res.status(500).json({ error: "Failed to delete " });
        })

}



//authentication function
//token  
function verifyToken(req, res, next) {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Bearer')) {
        try {
            const token = authorization.split(' ')[1];
            const { userId } = jwt.verify(token, 'qsakljhhhutrdfglkijh');
            req.user = authenticationModel.findById(userId).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({ "status": "failed", "message": "Unauthorized user" });
        }
    } else {
        res.status(401).send({ "status": "failed", "message": "Unauthorized user" });
    }
}



function useruploadedproduct(req, res) {




}




module.exports = { postforsell, projects, projectdetails, orderconfirm, orderinfo, deleteorder, signup, signin, verifyToken, useruploadedproduct }