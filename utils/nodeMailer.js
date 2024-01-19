const { model } = require('mongoose');
const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'f-k-87@list.ru',
        pass: 'SsydPpu1es1JRNd2XXCy'
    },
},
    { from: '<f-k-87@list.ru>' },
);

const mailer = masagge => {
    transporter.sendMail(masagge, (err, info) => {
        if (err) return console.log(err)
        console.log('сообщение', info)
    })
};

module.exports = mailer;