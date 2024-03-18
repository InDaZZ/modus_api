const anonimOrder = require('../model/anonimOrder');
const anonimUser = require('../model/anonimUser');
const mailer = require('../utils/nodeMailer');

const createOrder = (req, res, next) => {
    const {
        products,
        phone,
    } = req.body;
    const owner = req.user;
    anonimUser.findByIdAndUpdate(owner, { phone: phone })
        .then((user) => {
            //console.log(user)
        })
    anonimOrder.create({ products, owner, phone })
        .then((order) => {
            const masagge = {
                to: 'f-k-87@list.ru',
                subject: 'новый заказ',
                text: order.products.join(' ') + `Номер Клиента${order.phone}`,
            }
            mailer(masagge)
            res.status(201).send(order)
        })
        .catch((err) => {
            console.log(err)
        });
}

module.exports = {
    createOrder,

}