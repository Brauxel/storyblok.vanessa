const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    https: true,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Vanessa :: StoryBlok",
    }),
  ],
};
