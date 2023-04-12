const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlMenu = require('../controllers/menu');
const ctrlOrder = require('../controllers/order');


// Home 
//aboutUs
router
.route('/aboutUs')
.get(ctrlHome.aboutUs)

router
.route('/aboutUs/:dayid')
.put(ctrlHome.updateDay)

module.exports = router;