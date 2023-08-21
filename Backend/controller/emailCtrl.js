const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  // Generate SMTP service account from ethereal.email
  try {
    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.error("Failed to create a testing account. " + err.message);
        return process.exit(1);
      }

      console.log("Credentials obtained, sending message...");

      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.MAIL_ID,
          pass: process.env.MP,
        },
      });

      // Message object
      let message = {
        from: "SALIM <sender@example.com>",
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
      };

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log("Error occurred. " + err.message);
          return process.exit(1);
        }

        //console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      });
    });
  } catch (error) {
    console.error("Error occurred fromnodemailer:", error);
  }
});

module.exports = sendEmail;
