const wp = require('@cypress/webpack-preprocessor');
const DotenvWebpack = require('dotenv-webpack');
const path = require('path');

const ENV_PATH = path.resolve(__dirname, '../../.env');
require('dotenv').config({ path: ENV_PATH });

const http = require('http');
const next = require('next');
const nock = require('nock');

module.exports = async (on, config) => {

  
  config.baseUrl = process.env.SERVER_URL || 'http://localhost:3000/';

  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            }
          }
        ]
      },
      plugins: [
        new DotenvWebpack({ path: ENV_PATH }),
      ]
    },
  };
  on('file:preprocessor', wp(options));

  const app = next({ dev: true })
  const handleNextRequests = app.getRequestHandler()
  await app.prepare();

  const customServer = new http.Server(async (req, res) => {
    return handleNextRequests(req, res)
  })

  await new Promise((resolve, reject) => {
    customServer.listen(3000, (err) => {
      if (err) {
        return reject(err)
      }
      console.log('> Ready on http://localhost:3000')
      resolve()
    })
  });

  // https://on.cypress.io/task
  on('task', {
    clearNock() {
      nock.restore()
      nock.cleanAll()

      return null
    },

    async nock({ hostname, method, path, statusCode, body }) {
      nock.activate()

      console.log('nock will: %s %s%s respond with %d %o',
        method, hostname, path, statusCode, body)

      method = method.toLowerCase()
      nock(hostname)[method](path).reply(statusCode, body)

      return null
    },
  })

  return config;
};