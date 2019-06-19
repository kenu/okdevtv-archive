const notification = require('./aws-ses.js');

module.exports = {
    send: async function (email, message) {
        console.log('send', email)
        const result = await notification.sendCustom({
            toAddresses:[email], ccAddresses: [], subject: '메일', message
        });
        console.log(result);
    }
};
