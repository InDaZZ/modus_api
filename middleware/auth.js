const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorization = req.cookies.jwt;//После написания фронта буду брать токен из localstorage

  if (!authorization) {
    return console.log(err);
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