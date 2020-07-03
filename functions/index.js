const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const cors = require('cors');

const creds = require('./config');

admin.initializeApp();

var transport = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

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
      from: name,
      to: 'kevinphanle11@gmail.com',
      subject: 'New Message from Contact Form: ' + name,
      html: content
    }

    return transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return res.json({
          status: 'fail'
        })
      } else {
        return res.json({
          status: 'success'
        })
      }
    })
  })
})
