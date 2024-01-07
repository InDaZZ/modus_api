const adminRouter = require('express').Router();
const { login } = require('../controllers/adminUserCtrl');
adminRouter.post('/adminpanellogin', login);
module.exports = adminRouter;