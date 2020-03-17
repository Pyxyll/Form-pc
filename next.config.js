const withImages = require('next-images');
module.exports = withImages({});

const withCss = require('@zeit/next-css');
module.exports = withCss({});

module.exports = {
  webpackDevMiddleware: config => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300 // delay before rebuilding
    };
    return config;
  }
};
