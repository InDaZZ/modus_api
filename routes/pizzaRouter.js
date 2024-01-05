const pizzaRoutet = require('express').Router();
const { createPizza, deletePizza, findAll } = require('../controllers/pizzaCtrl');
pizzaRoutet.post('/createpizza', createPizza)
pizzaRoutet.delete('/deletpizza', deletePizza)
pizzaRoutet.get('/allpizza', findAll)
module.exports = pizzaRoutet;