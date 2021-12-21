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
      filename: "simulatore/index.html",
      template: "./src/simulatore/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "curiosita-del-passato/index.html",
      template: "./src/curiosita-del-passato/index.html"
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
