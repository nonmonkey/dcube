if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dcube.common.prod.js');
} else {
  module.exports = require('./dcube.common.dev.js');
}
