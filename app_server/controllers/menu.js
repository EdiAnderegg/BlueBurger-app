/*GET menu page*/
const menu = (req, res) =>{
    res.render('index',{title: 'menu'});
}

/*GET food page*/
const displayFood = (req, res) =>{
    res.render('index',{title: 'food'});
}

module.exports = {
    menu,
    displayFood
};