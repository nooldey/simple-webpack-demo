const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  optimization: {
    usedExports: true
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ]
})