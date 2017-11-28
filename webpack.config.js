const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const constants = {};
constants.paths = {};
constants.paths.src = path.resolve( __dirname, 'src');
constants.paths.dist = path.resolve( __dirname, 'dist');

module.exports = {
  entry: path.join(constants.paths.src, './index.jsx'),
  output: {
  	path: constants.paths.dist,
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(constants.paths.src, 'index.html'),
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    },{
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
      },
    },{
      test: /\.mp3$/,
      loader: "file-loader",
    }],  
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}