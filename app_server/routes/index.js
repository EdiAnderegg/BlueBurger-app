const express = require('express');
const router = express.Router();
/*controllers*/
const ctrlHome = require('../controllers/home');
const ctrlMenu = require('../controllers/menu');
const ctrlOrder = require('../controllers/order');

/*Home pages*/
router.get('/', ctrlHome.home);
router.get('/aboutUs', ctrlHome.aboutUs);
router.get('/contact', ctrlHome.contact);
/*Menu pages*/
router.get('/menu', ctrlMenu.menu);
router.get('/menu/food', ctrlMenu.displayFood);
/*Order pages*/
router.get('/order', ctrlOrder.order);
router.get('/order/form', ctrlOrder.sendOrder); 
module.exports = router;

