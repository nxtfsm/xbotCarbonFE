const HtmlWebPackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',

  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ {
          loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ {loader: "file-loader" }]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",

    }),
    new HtmlWebPackPlugin({
      template: "./src/templates/topLevelSectionTile.html",
      filename: "./templates/topLevelSectionTile.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/templates/mainContentSection.html",
      filename: "./templates/mainContentSection.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/templates/tabbedContentWindow.html",
      filename: "./templates/tabbedContentWindow.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
