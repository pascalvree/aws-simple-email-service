var config = require('./config.aws.ses.json');
var facade = require('./facade.js');

var mail = {
  to: "pascal.vree@gmail.com",
  cc: "pascal.vree@rogare.org",
  from: "pascal.vree@rogare.org",
  subject: "test",
  body: { 
    text: "Hoi, ik ben een test!",
    html: "<!DOCTYPE html><html><head><title>Test e-mail</title></head><body><p>Hoi, ik ben een test!</p></body></html>"
  }
};

var Send = function() {
  facade.Send(config, mail);
}

module.exports = {
  Send: Send,
};

Send();
