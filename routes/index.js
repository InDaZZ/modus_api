const router = require('express').Router();

const usersRouter = require('./usersRouter');
const signupRouter = require('./signup');
const orderRouter = require('./orderRouter');
const adminRoutet = require('./adminRouter');
const rollRouter = require('./rollRoutet');
const pizzaRoutet = require('./pizzaRouter')

const auth = require('../middleware/auth');


router.use('/', signupRouter);
router.use('/', adminRoutet);


router.use(auth);
router.use('/', usersRouter);
router.use('/', orderRouter);
router.use('/', rollRouter);
router.use('/', pizzaRoutet);



module.exports = router;