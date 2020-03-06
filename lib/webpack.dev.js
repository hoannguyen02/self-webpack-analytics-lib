const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { prefixName, libraryName } = require('./build-settings');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './lib/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: prefixName + '.[hash].js',
    library: libraryName,
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
});
