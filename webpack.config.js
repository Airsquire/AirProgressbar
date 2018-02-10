const webpack = require("webpack")
const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const BUILD_DIR = path.resolve(__dirname, "build")
const SRC_DIR = path.resolve(__dirname, "src")

module.exports = {
  entry: SRC_DIR + "/index.tsx",
  output: {
    path: BUILD_DIR,
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
      {
        test: /\.tsx?$/,
        loader: ["babel-loader?presets[]=es2015", "awesome-typescript-loader"]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
}
