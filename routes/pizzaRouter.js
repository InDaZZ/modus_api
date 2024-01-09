const pizzaRoutet = require('express').Router();
const { createPizza, deletePizza, findAll } = require('../controllers/pizzaCtrl');
const authAdmin = require('../middleware/authAdmin')
pizzaRoutet.get('/allpizza', findAll)
pizzaRoutet.use(authAdmin)
pizzaRoutet.post('/createpizza', createPizza)
pizzaRoutet.delete('/deletpizza', deletePizza)

module.exports = pizzaRoutet;