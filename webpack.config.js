const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    https: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //filename: "index.[contenthash].html",
      hash: true,
      template: "./src/index.html",
      title: "Vanessa :: StoryBlok",
    }),
  ],
};
