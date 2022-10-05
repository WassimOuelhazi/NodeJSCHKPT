// 5-  In this task, you will:
// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
// Try to send your self email using this

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: '', //put the email adress  of the sender here 
  
    pass: '' //put the password  related to the @ adress  of the sender here 
  }
});

var mailOptions = {
  from: '', //put the email adress  of the sender here 
  to: '',//put the email adress  of the receiver here 
  subject: 'Sending Email using Node.js',
  text: 'Hello Node JS workshop'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


module.exports=transporter;

 