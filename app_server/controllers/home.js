const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
/*if(process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com'
}*/



/* GET home page. */
const renderHome = (req,res) => {
    res.render('home/home', {
        homeContent : {
            title: 'Die Burgers',
            body: 'Entdecke unsere Kreationen!'
        }
    });
}

const home = (req,res) => {

renderHome(req,res);
};

/* GET aboutUs page. */
const renderAboutUs = (req, res, responseBody) => {
    res.render('home/aboutUs', {
        aboutUsContent : responseBody
    });
}

const aboutUs = (req,res) => {
    const path = '/api/aboutUs';
    const requestOptions = {
        url : `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    request(requestOptions, (err, { statusCode },body)=>{
        let data = [];
        if(statusCode === 200 && body.length){
            data = body[0];
        }
        renderAboutUs(req,res,data);
    })
    };

/* GET contact page. */
const contact = (req,res) => {
    res.render('home/contact', {
        contactContent : {
            title: 'Kontakt',
            body: {
                adress : {
                    street : 'Willerstrasse 125',
                    zipCode : '9230',
                    city : 'Flawil'
                },
                tel : '079 423 123 34'
            }
        }
    });
    };

module.exports = {
    home,
    aboutUs,
    contact
};