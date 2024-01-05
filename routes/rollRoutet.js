const rollRoutet = require('express').Router();
const { createRoll, deleteRoll, findAll } = require('../controllers/rollCtrl');
rollRoutet.post('/createroll', createRoll)
rollRoutet.delete('/deletroll', deleteRoll)
rollRoutet.get('/allroll', findAll)
module.exports = rollRoutet;