var aws = require('aws-sdk');

var Send = function(config, mail) {
  aws.config.update({ accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey });
  aws.config.update({ region: config.region });

  var ses = new aws.SES({ apiVersion: config.apiVersion });
  ses.sendEmail({ 
    Source: mail.from, 
    Destination: { ToAddresses: [ mail.to ], CcAddresses: [ mail.cc ] },
    Message: {
      Subject: {
          Data: mail.subject
      },
      Body: {
        Html: { Data: mail.body.html },
        Text: {
          Data: mail.body.text
        }
      }
    }
  },
  function(err, data) {
    if(err) { console.log('Email errors'); console.log(err); throw err; }
    console.log(new Date().toString() + '; email sent: ' + mail.to +'; ');
    console.log(data);
  });
}

module.exports = {
  Send: Send,
};
