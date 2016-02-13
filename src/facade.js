var service = require('./service.js');

var Send = function(config, mail) {
  service.Send(config, mail);
}

module.exports = {
  Send: Send,
};
