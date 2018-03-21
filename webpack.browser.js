'use strict';

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const str = JSON.stringify;
const env = process.env;

module.exports = {
  target: 'web',
  entry: {
    'fcoin': './lib/fcoin-browser',
    'fcoin-worker': './lib/workers/worker'
  },
  output: {
    path: path.join(__dirname, 'browser'),
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['-browser.js', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FCOIN_NETWORK':
        str(env.FCOIN_NETWORK || 'main'),
      'process.env.FCOIN_WORKER_FILE':
        str(env.FCOIN_WORKER_FILE || '/fcoin-worker.js')
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
};
