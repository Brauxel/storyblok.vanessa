import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    https: true,
    open: true,
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  //   externals: {
  //     react: "React",
  //     "react-dom": "ReactDOM",
  //   },
  plugins: [
    new HtmlWebpackPlugin({
      //filename: "index.[contenthash].html",
      hash: true,
      template: './src/index.html',
      title: 'Vanessa :: StoryBlok',
    }),
  ],
};
