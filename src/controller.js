var facade = require('./facade.js');

var Send = function(config, email) {
  facade.Send(config, email);
}

module.exports = {
  Send: Send,
};
