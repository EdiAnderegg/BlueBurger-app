/* GET home page. */
const home = (req,res) => {
res.render('home/home', {
    homeContent : {
        title: 'Die Burgers',
        body: 'Entdecke unsere Kreationen!'
    }
});
};

/* GET aboutUs page. */
const aboutUs = (req,res) => {
    res.render('home/aboutUs', {
        aboutUsContent : {
            title : 'Liefer',
            subTitle : 'zeiten',
            body : {
                week: {
                    Montag: '17:00 - 21:00', 
                    Dienstag: '17:00 - 21:30', 
                    Mittwoch: '17:00 - 21:30', 
                    Donnerstag: '17:00 - 21:30', 
                    Freitag: '17:00 - 22:00', 
                    Samstag: '11:00 - 1400  17:00 - 22:00', 
                    Sonntag: '11:00 - 14:00  17:00 - 21:30'
                }
            }
        }
    });
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