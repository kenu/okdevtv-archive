const notification = require('../lib/aws-ses.js');

async function doIt() {
    let toAddresses = ['email@okdevtv.com'];
    let ccAddresses = [];
    let subject = '메일 테스트';
    let message = '함께 일하게 되서 기쁩니다. !';

    const data2 = await notification.sendCustom({ toAddresses, ccAddresses, subject, message });
    console.log('data', data2);
}
doIt();