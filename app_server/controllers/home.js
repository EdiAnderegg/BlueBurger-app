/* GET home page. */
const home = (req,res) => {
res.render('home/home', {title: 'Die Burgers'});
};

/* GET aboutUs page. */
const aboutUs = (req,res) => {
    res.render('/home', {title: 'aboutUs'});
    };

/* GET contact page. */
const contact = (req,res) => {
    res.render('/home', {title: 'Kontakt'});
    };

module.exports = {
    home,
    aboutUs,
    contact
};