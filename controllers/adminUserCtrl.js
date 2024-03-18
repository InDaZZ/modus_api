const jwt = require('jsonwebtoken');
const admiUser = require('../model/adminUser');
const login = (req, res, next) => {
    const { name, password } = req.body;
    console.log(req.body)
    console.log('вюзере')
    //console.log(password)
    admiUser.findOne({ name: name })
        .then((user) => {
            console.log('вюзере111')
            if (user.password === password) {
                console.log('вюзере222')
                const token = jwt.sign({ _id: user._id }, 'some-secret-key');
                res
                    .cookie('jwtAdmin', token, {
                        maxAge: 3600000,
                        httpOnly: true,
                    })
                    .status(201)
                    .send({ token })
            }
        })
        .catch(err => console.log(err))

};
module.exports = {
    login,
}