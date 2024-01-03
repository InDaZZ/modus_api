const jwt = require('jsonwebtoken');
const anonimUser = require('../model/anonimUser')

const creatUser = (req, res, next) => {
    anonimUser.find({})
        .then((user) => {
            if (user.length === 0) {
                return `Гость 1`
            }
            let lastUser = (Number((user[user.length - 1].name).slice(6))) + 1
            return `Гость ${lastUser}`
        })
        .then((name) => {

            anonimUser.create({ name })
                .then((user) => {
                    console.log(user)
                    const token = jwt.sign({ _id: user._id }, 'some-secret-key');
                    res
                        .cookie('jwt', token, {
                            maxAge: 3600000,
                            httpOnly: true,
                        })
                        .status(201)
                        .send({ name: user.name, token })
                })
        })

        .catch((err) => {
            console.log(err)
        })
};

const testAut = (req, res, next) => {   
    anonimUser.find({})
    .then((users)=> {
        res.send([users])
    })
}

module.exports = {
    creatUser,
    testAut
}