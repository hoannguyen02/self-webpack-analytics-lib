const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { prefixName, libraryName } = require('./build-settings');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: prefixName + '.min.[contenthash].js',
    library: libraryName,
  },
});
