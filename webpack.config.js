const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports =
{
  entry: '../../Desarrollo/tienda/app.js',
  output:
  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../Produccion/tienda'),
  },
  module:
  {
    rules:
    [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  plugins: 
  [
    new HTMLWebpackPlugin
    (
     {
      filename: 'index.html',
      template: '../../Desarrollo/tienda/index.html',
     }
    )
  ],
  mode: 'development',
}
