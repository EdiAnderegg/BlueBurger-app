const mongoose = require('mongoose');
const AboutUs = mongoose.model('AboutUs');


const aboutUs = (req, res) => {
    AboutUs
    .find({})
    .then((response) => {
        if(response){
            res
            .status(200)
            .json(response)
        }
    }).catch((err) =>{
        res
        .status(404)
        .json(err)
    })
};

const updateDay = (req, res) => {
    res
    .status(200)
    .json({'status' : 'success'})
};

module.exports = {
    aboutUs,
    updateDay
};