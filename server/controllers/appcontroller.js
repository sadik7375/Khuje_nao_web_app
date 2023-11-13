const productModel = require('../model/productModel');
const orderModel = require('../model/orderconfirmModel');

//sell post function
function postforsell(req, res) {

    const { productname, institute, location, category, price, description, photo } = req.body;

    const product = new productModel(

        {
            productname: productname,
            institute: institute,
            location: location,
            category: category,
            photo: photo,
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

module.exports = { postforsell, projects, projectdetails, orderconfirm, orderinfo, deleteorder }