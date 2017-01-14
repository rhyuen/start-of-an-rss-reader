const webpack = require("webpack");
const path = require("path");
const WebpackCleanPlugin = require("webpack-cleanup-plugin");
const BUILD_DIR = path.join(__dirname, "public/views");
const SRC_DIR = path.join(__dirname, "src");

module.exports = {
  entry: path.join(SRC_DIR, "index.jsx"),
  output: {
    path: SRC_DIR,
    filename: "bundle.js"
  },
  watch: true,
  plugins: [
    // new WebpackCleanPlugin({
    //   exclude: ["index.html", "*.jpg", "*.css", "*.png"]
    // })
  ],
  modules: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      include: SRC_DIR,
      loader: "babel"
    }]
  }
};
