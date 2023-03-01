/* GET home page. */
const home = (req,res) => {
res.render('home/home', {title: 'Die Burgers'});
};

/* GET aboutUs page. */
const aboutUs = (req,res) => {
    res.render('home/aboutUs', {title: 'Liefer', secTitle: 'zeiten'});
    };

/* GET contact page. */
const contact = (req,res) => {
    res.render('home/contact', {title: 'Kontakt'});
    };

module.exports = {
    home,
    aboutUs,
    contact
};