const mongoose = require('mongoose');


//Data of About us
const aboutUsWeekSchema = new mongoose.Schema({
    Montag: String,
    Dienstag: String,
    Mittwoch: String,
    Donnerstag: String,
    Freitag: String,
    Samstag: String,
    Sonntag: String
});

const aboutUsBodySchema = new mongoose.Schema({
    week: aboutUsWeekSchema
});

const aboutUsSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    body: aboutUsBodySchema
});

mongoose.model('AboutUs', aboutUsSchema);

//Data of Contact
const contactAdressSchema = new mongoose.Schema({
    street: String,
    zipCode: String,
    city: String
});

const contactBodySchema = new mongoose.Schema({
    adress: contactAdressSchema,
    tel: String
});

const contactSchema = new mongoose.Schema({
    title: String,
    body: contactBodySchema
});

mongoose.model('Contact', contactSchema);

//Data of Main

const homeSchema = new mongoose.Schema({
    title: String,
    body: String
});

mongoose.model('Home', homeSchema);

