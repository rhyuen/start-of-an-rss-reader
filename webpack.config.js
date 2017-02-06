const webpack = require("webpack");
const path = require("path");
//const WebpackCleanPlugin = require("webpack-cleanup-plugin");
const BUILD_DIR = path.resolve(__dirname, "public/views");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: {
    "indexEntry": path.join(SRC_DIR, "index.jsx"),
    "profileEntry": path.join(SRC_DIR, "profile_index.jsx"),
    "popularEntry": path.join(SRC_DIR, "popular_index.jsx"),
    "bySourceEntry": path.join(SRC_DIR, "bysource_index.jsx")
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
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
  },
  devServer: {
    inline: true,
    hot: true
  }
};
