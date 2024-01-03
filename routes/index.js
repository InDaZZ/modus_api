const router = require('express').Router();

const usersRouter = require('./usersRouter');
const signupRouter = require('./signup');
const orderRouter = require('./orderRouter');

const auth = require('../middleware/auth');

router.use('/', signupRouter);

router.use(auth);
router.use('/', usersRouter);
router.use('/', orderRouter);


module.exports = router;