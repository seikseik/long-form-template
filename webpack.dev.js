const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/template.html"
    }),
    new HtmlWebpackPlugin({
      filename: "serpenti-metamorfosi/index.html",
      template: "./src/serpenti-metamorfosi/template.html"
    }),
    new HtmlWebpackPlugin({
      filename: "arte-dell-emozione/index.html",
      template: "./src/arte-dell-emozione/template.html"
    }),
    new HtmlWebpackPlugin({
      filename: "la-formula-magica/index.html",
      template: "./src/la-formula-magica/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader"
        ]
      }
    ]
  }
});
