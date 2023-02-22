/* GET home page. */
const home = (req,res) => {
res.render('index', {title: 'Die Burgers'});
};

/* GET aboutUs page. */
const aboutUs = (req,res) => {
    res.render('index', {title: 'aboutUs'});
    };

/* GET contact page. */
const contact = (req,res) => {
    res.render('index', {title: 'Kontakt'});
    };

module.exports = {
    home,
    aboutUs,
    contact
};