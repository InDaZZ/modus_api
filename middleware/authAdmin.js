const admiUser = require('../model/adminUser');

module.exports = (req, res, next) => {
    console.log(11111)
    console.log(admiUser)
    const authorization = req.cookies.id;//После написания фронта буду брать токен из localstorage

    if (!authorization) {
        return res.send('Данные пользователя неверны');
    }
    admiUser.findById(authorization)
        .then((user) => {
            if (user.admin === true) {
                req.adminId = authorization
                return next();
            }
            throw new Error('Данные пользователя неверны');
        })
        .catch((err) => {
            res.send(err)
        })
    //return next(); // пропускаем запрос дальше
};