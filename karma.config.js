var webpackConfig = require('./webpack-karma.config.js');
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    basePath: './resources/assets/admin/js/',
    // this is the entry file for all our tests.
    files: ['tests/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'tests/index.js': ['webpack']
    },
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}