'use strict';

const Path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const str = JSON.stringify;
const env = process.env;

module.exports = {
  target: 'web',
  entry: {
    'app': './browser/src/app',
    'worker': './lib/workers/worker'
  },
  output: {
    path: Path.join(__dirname, 'browser'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['-browser.js', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BCOINSV_NETWORK':
        str(env.BCOINSV_NETWORK || 'main'),
      'process.env.BCOINSV_WORKER_FILE':
        str(env.BCOINSV_WORKER_FILE || '/bcoinsv-worker.js')
    }),
    new UglifyJsPlugin()
  ]
};
