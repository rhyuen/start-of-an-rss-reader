const webpack = require("webpack");
const path = require("path");
//const WebpackCleanPlugin = require("webpack-cleanup-plugin");
const BUILD_DIR = path.resolve(__dirname, "public/views");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: path.join(SRC_DIR, "index.jsx"),
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: "babel"
      }
    ]
  }
};
