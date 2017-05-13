const path = require('path');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

let devToolType;

if (process.env.environment === 'dist') {
  devToolType = 'source-map';
} else {
  devToolType = 'eval-source-map';
}

module.exports = {
  entry: './public/src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/dist/js'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'public/src/js'),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'stage-3'],
        },
      },
    ],
  },
  devtool: devToolType,
  plugins: [
    new UnminifiedWebpackPlugin(),
  ],
};
