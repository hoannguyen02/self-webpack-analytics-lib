const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['source-map-loader'],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['source-map-loader'],
      },
    ],
  },
});
