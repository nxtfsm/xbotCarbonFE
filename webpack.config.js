const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin'),
      Dotenv = require('dotenv-webpack'),
      path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
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
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/topLevelSectionTile.html",
      filename: "./templates/topLevelSectionTile.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/mainContentSection.html",
      filename: "./templates/mainContentSection.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/tabbedContentWindow.html",
      filename: "./templates/tabbedContentWindow.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/tabContentPanel.html",
      filename: "./templates/tabContentPanel.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/tabListHead.html",
      filename: "./templates/tabListHead.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/multiselect.html",
      filename: "./templates/multiselect.html"
    }),
    new ResourceHintWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
