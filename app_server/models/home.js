const mongoose = require('mongoose');


//Data of About us
const aboutUsWeekShema = new mongoose.Schema({
    Montag: String,
    Dienstag: String,
    Mittwoch: String,
    Donnerstag: String,
    Freitag: String,
    Samstag: String,
    Sonntag: String,
});

const aboutUsBodySchema = new mongoose.Schema({
    week:{
        type: aboutUsWeekShema,
        required: true,
    },
});

const aboutUsSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    body: {
        type: aboutUsBodySchema,
        required: true,
    },
});

mongoose.model('AboutUs', aboutUsSchema, 'Home');