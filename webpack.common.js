const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    other: './src/another.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hello PWA',
      hash: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: 'a demo project for use guide under webpack',
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        lodash: {
          name: "lodash",
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 10,
        },
        modules: {
          name: 'chunk-modules',
          test: /[\\/]node_modules[\\/]/,
          priority: 3,
          chunks: 'initial' // 只打包初始时依赖的第三方
        }
      }
    }
  }
}