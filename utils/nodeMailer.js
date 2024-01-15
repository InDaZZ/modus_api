const { model } = require('mongoose');
const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dexter.reinger61@ethereal.email',
        pass: 'qWEwPTtKz7RW6YKV7N'
    },
},
    { from: '<dexter.reinger61@ethereal.email>' },
);

const mailer = masagge => {
    transporter.sendMail(masagge, (err, info) => {
        if (err) return console.log(err)
        console.log('сообщение', info)
    })
};

module.exports = mailer;