const anonimOrder = require('../model/anonimOrder');
const anonimUser = require('../model/anonimUser');

const createOrder = (req, res, next) => {
    const {
        products,
        phone,
    } = req.body;
    const owner = req.user;
    anonimUser.findByIdAndUpdate(owner,{phone:phone})
        .then((user) => {
            console.log(user)
        })
    anonimOrder.create({ products, owner })
        .then((oreder) => {
            console.log(oreder)
            res.status(201).send(oreder)
        })
        .catch((err) => {
            console.log(err)
        });
}

module.exports = {
    createOrder,

}