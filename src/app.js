var config = require(process.env.CONFIGFILE || '../config/config.aws.ses.json');
var controller = require('./controller.js');

var email = {
  to: "pascal.vree@gmail.com",
  cc: "pascal.vree@rogare.org",
  from: "pascal.vree@rogare.org",
  subject: "test",
  body: { 
    text: "Hoi, ik ben een test!",
    html: "<!DOCTYPE html><html><head><title>Test e-mail</title></head><body><p>Hoi, ik ben een test!</p></body></html>"
  }
};

controller.Send(config, email);
