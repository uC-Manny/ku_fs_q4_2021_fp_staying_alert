const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "mailjet",
    auth: {
      user: "0ade2270d8decd1ceadd465ec0f87e7a",
      pass: "42257934e6f9baae83ea89e0dd72db80",
    },
  });

  const mailOptions = {
    from: "stayingalertapp@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
