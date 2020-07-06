const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

const creds = require('./config');

admin.initializeApp();

var transport = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  port: 465,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)


exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var name = req.body.name
    var email = req.body.email
    var phone = req.body.phone
    var message = req.body.message || ""
    var content = `
    <p>name: ${name}</p>
    <p>email: ${email}</p>
    <p>phone: ${phone}</p>
    <br/>
    <p>message: \n\n${message} </p>
  `

    const mailOptions = {
      from: email,
      to: 'kevinphanle11@gmail.com',
      subject: 'New Message from Contact Form: ' + name,
      html: content
    }
    
    const getStatus = function (error, info) {
      if (error) {
        return console.log(error);
      }

      console.log('Message sent: ', info.message)
    }

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        return res.send({status: "fail"})
      }
      return res.send({status: "success"});
    })
  })
})
