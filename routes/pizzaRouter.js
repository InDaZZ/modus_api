const pizzaRoutet = require('express').Router();
const { createPizza, deletePizza, findAll } = require('../controllers/pizzaCtrl');
const authAdmin = require('../middleware/authAdmin')
pizzaRoutet.get('/allpizza', findAll)



module.exports = pizzaRoutet;