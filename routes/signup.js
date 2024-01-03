const signupRouter = require('express').Router();

const {
    creatUser,
} = require('../controllers/anonimUserCtrl');

signupRouter.post('/signup', creatUser);

module.exports = signupRouter;