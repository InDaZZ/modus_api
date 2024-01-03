const anonimOrder = require('../model/anonimOrder')
const createOrder = (req, res, next) => {
    const {
        products
    } = req.body;
    const owner = req.user;
    
    anonimOrder.create({ products,owner })
    .then((oreder) => res.status(201).send(oreder))
    .catch((err) => {
       console.log(err)
      });
}

module.exports = {
    createOrder,

}