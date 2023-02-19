/* GET home page. */
const index = (req,res) => {
res.render('index', {title: 'Blue Burger'});
};

module.exports = {
    index
};