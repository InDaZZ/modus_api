const adminRouter = require('express').Router();
const { login } = require('../controllers/adminUserCtrl');
adminRouter.post('/login', login);
module.exports = adminRouter;