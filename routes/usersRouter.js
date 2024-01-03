const usersRouter = require('express').Router();
const { creatUser, login, testAut } = require('../controllers/anonimUserCtrl');
usersRouter.post('/main', testAut);


module.exports = usersRouter;