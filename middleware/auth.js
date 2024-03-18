const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorization = req.cookies.jwt || req.body.owner//После написания фронта буду брать токен из localstorage\
  console.log(req.cookies.jwt,1111111)
  console.log(req.body.owner,222222222);
  

  if (!authorization) {
    return console.log(req.body.owner);
  }

  let payload;

  try {
    payload = jwt.verify(authorization, 'some-secret-key');
  } catch (err) {
    console.log(err)
  }
  
  req.user = payload; // записываем пейлоуд в объект запроса

  return next(); // пропускаем запрос дальше
};