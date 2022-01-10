const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");


const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        title: "Home",
        filename: "index.html",
        template: "./src/template.html",
        minify: false
      }),
      new HtmlWebpackPlugin({
        title: "Home-2",
        filename: "simulatore-di-voto/index.html",
        template: "./src/simulatore-di-voto/template.html",
        minify: false
      }),
      new HtmlWebpackPlugin({
        title: "Home-3",
        filename: "classifiche-curiosita-presidenti/index.html",
        template: "./src/classifiche-curiosita-presidenti/template.html",
        minify: false
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
