/* eslint-disable no-console */
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  hostname: 'localhost',
  port: '3011',
  webPath: path.join(__dirname, 'dist'),
  mockPath: __dirname,
  logLevel: 'debug',
  mocks: {
    '/key.txt': {
      get: function(request, response) {
        const { headers } = request;
        const output = process.env.GOOGLE_MAPS_API_KEY;

        response.send(output);
      }
    }
  }
};
