const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './lib/index.js',
  },
  node: {
    fs: 'empty',
  },
  plugins: [new CleanWebpackPlugin(), new Dotenv()],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
