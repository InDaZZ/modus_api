const rollRoutet = require('express').Router();
const { createRoll, deleteRoll, findAll } = require('../controllers/rollCtrl');
const authAdmin = require('../middleware/authAdmin')

rollRoutet.get('/allroll', findAll)




module.exports = rollRoutet;