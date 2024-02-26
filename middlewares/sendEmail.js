const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  
    var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2b6510aef89e88",
          pass: "0a1f9f8b032780"
        }
      });
    
   
  

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};