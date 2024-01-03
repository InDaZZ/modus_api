const orderRouter = require('express').Router();

const {
    createOrder,
} = require('../controllers/anonimOrderCtrl');

orderRouter.post('/order', createOrder);

module.exports = orderRouter;