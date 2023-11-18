const { Router } = require("express"); //Router class
const router = Router(); //Router class router object
const controller = require('../controllers/appcontroller');
const { verifyToken } = require('../controllers/appcontroller');




//get routes

router.route('/projects').get(controller.projects);
router.route('/projects/:id').get(controller.projectdetails);
router.route('/orderinfo').get(controller.orderinfo);



//post routes
router.route('/postforsell').post(verifyToken, controller.postforsell);
router.route('/oderconfirm').post(controller.orderconfirm);
router.route('/signup').post(controller.signup);
router.route('/signin').post(controller.signin);



//delete routes
router.route('/deleteorder/:id').delete(controller.deleteorder);



module.exports = router;