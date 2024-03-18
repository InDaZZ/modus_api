const jwt = require('jsonwebtoken');
const admiUser = require('../model/adminUser');

module.exports = (req, res, next) => {
    console.log('АДМИН ЛОГИ')
    console.log(req.body)
    console.log(req.body.owner)
    console.log(req.cookies.jwtAdmin)
    const authorization = req.cookies.jwtAdmin || req.body.owner;//После написания фронта буду брать токен из localstorage
    console.log(jwt.verify(authorization, 'some-secret-key'))

    if (!authorization) {
        return res.send('Данные пользователя неверны');
    }
    let payloadAdmin;
    
     try {
       payloadAdmin = jwt.verify(authorization, 'some-secret-key');
        
    } catch (err) {
        return new Error('Необходима авторизация')
    }

    admiUser.findById(payloadAdmin._id)
    .then((user) => {
        console.log(user)
        if (user.admin === true) {
            req.userAdmin = payloadAdmin
            return next();
        }
        throw new Error('Данные пользователя неверны');
    })
    .catch((err) => {
        console.log(err)
    })
    /* try {
        payloadAdmin = jwt.verify(authorization, 'some-secret-key');
        
    } catch (err) {
        return new Error('Необходима авторизация')
    }

    req.userAdmin = payloadAdmin; */ // записываем пейлоуд в объект запроса

    
   /*  admiUser.findById(authorization)
        .then((user) => {
            if (user.admin === true) {
                req.adminId = authorization
                return next();
            }
            throw new Error('Данные пользователя неверны');
        })
        .catch((err) => {
            res.send(err)
        }) */
    //return next(); // пропускаем запрос дальше
};