const admiUser = require('../model/adminUser');
const login = (req, res, next) => {
    const { name, password } = req.body;
    console.log(name)
    console.log(password)
    admiUser.findOne({ name: 'modusAdmin' })
        .then((user) => {
            if (user.password === password) {
                res
                    .cookie('id', user.id, {
                        maxAge: 31536000,
                        sameSite: 'none',
                        secure: true,
                        httpOnly: true,
                    })
                    .send('вы Администратор');//приходит id в куке записываем в localstorage
            }
        })
};
module.exports = {
    login,
}