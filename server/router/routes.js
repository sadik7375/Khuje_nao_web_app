const { Router } = require("express"); //Router class
const router = Router(); //Router class router object
const controller = require('../controllers/appcontroller');


router.route('/postforsell').post(controller.postforsell);
router.route('/projects').get(controller.projects);
router.route('/projects/:id').get(controller.projectdetails);
router.route('/oderconfirm').post(controller.orderconfirm);
router.route('/orderinfo').get(controller.orderinfo);
router.route('/deleteorder/:id').delete(controller.deleteorder);




module.exports = router;