const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "branchandgamer@gmail.com", // generated ethereal user
      pass: "tknrksgmosmiuusk", // generated ethereal password
    },
  });

transporter.verify().then(() => {
    console.log("Mailing: listo para enviar emails!")
})

module.exports = transporter;