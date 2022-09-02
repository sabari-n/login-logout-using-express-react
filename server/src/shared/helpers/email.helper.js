const nodemailer = require("nodemailer");
const configHelper = require('./config.helper');

let mailer = nodemailer.createTransport({
  host: configHelper.mailServer,
  port: configHelper.mailPort,
  secure: true, // true for 465, false for other ports
  auth: {
    user: configHelper.mailUserName,
    pass: configHelper.mailPassword, 
  },
});

const sendMail = async(msg) => {
  try {
    await mailer.sendMail(msg);
  }catch(error){
    throw new Error('Mail error : -'+error.message);
  }
}

module.exports = {
  sendMail
};