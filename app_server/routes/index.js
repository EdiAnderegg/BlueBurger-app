const express = require('express');
const router = express.Router();

//controller functions
const homepageController = (req, res) => {
  res.render('index', {title: 'Blue Burger'});
}

/* GET home page. */
router.get('/', homepageController);

module.exports = router;

