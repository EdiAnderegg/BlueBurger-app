/*GET order page*/
const order = (req, res) => {
    res.render('index',{title: 'order'});
};

/*GET form page*/
const sendOrder = (req, res) => {
    res.render('index',{title: 'sendOrder'});
};

module.exports = {
    order,
    sendOrder
};