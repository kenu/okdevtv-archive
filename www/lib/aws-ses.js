require('dotenv').config();
const util = require('util');
const AWS = require('aws-sdk');
const ses = new AWS.SES();

const base_mail = process.env.BASE_MAIL || 'from_email';
function getParams({ toAddresses, ccAddresses, subject, message }) {
  return {
    Destination: {
      ToAddresses: toAddresses,
      CcAddresses: ccAddresses,
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the message body in text format.',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    ReturnPath: base_mail,
    Source: base_mail,
  };
}

const sendEmail = util.promisify(ses.sendEmail).bind(ses);

const notification = {
  send: async function(message) {
    return await notification.sendCustom({
      toAddresses: base_mail,
      subject: '[ALERT] message from OKdevTV',
      message,
    });
  },
  sendCustom: async function({ toAddresses, ccAddresses, subject, message }) {
    let params = getParams({ toAddresses, ccAddresses, subject, message });
    try {
      return await sendEmail(params);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = notification;
