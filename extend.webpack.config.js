const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

const credentials = require('./credentials.json');

module.exports = {
  plugins: [
    new GuessPlugin({
      // Alternatively you can provide a Google Analytics View ID
      debug: false,
      // jwt: credentials,
      // GA: '123456789',
      reportProvider() {
        return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
      },
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};
