var nodemailer = require('nodemailer');
var demo={
sendMail:function(demo,callback){  
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kurtispoint0198@gmail.com',
    pass: 'kurtispoint'
  }
});

var mailOptions = {
  from: 'kurtispoint0198@gmail.com',
  to: demo.to,
  subject:demo.subject,
  text:demo.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("error in sent");
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
}

module.exports=demo;