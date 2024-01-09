const rollRoutet = require('express').Router();
const { createRoll, deleteRoll, findAll } = require('../controllers/rollCtrl');
const authAdmin = require('../middleware/authAdmin')

rollRoutet.get('/allroll', findAll)
rollRoutet.use(authAdmin)//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

rollRoutet.post('/createroll', createRoll)
rollRoutet.delete('/deletroll', deleteRoll)

module.exports = rollRoutet;