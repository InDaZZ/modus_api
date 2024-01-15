const protectedAdminRouter = require('express').Router();
const { login } = require('../controllers/adminUserCtrl');
const { createRoll, deleteRoll } = require('../controllers/rollCtrl');
const { createPizza, deletePizza } = require('../controllers/pizzaCtrl');
protectedAdminRouter.post('/adminpanellogin', login);
protectedAdminRouter.post('/createroll', createRoll);
protectedAdminRouter.delete('/deletroll', deleteRoll);
protectedAdminRouter.post('/createpizza', createPizza)
protectedAdminRouter.delete('/deletpizza', deletePizza)
module.exports = protectedAdminRouter;