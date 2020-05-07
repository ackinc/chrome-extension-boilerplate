const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    foreground: "./src/foreground/index.js",
    background: "./src/background/index.js",
    popup: "./src/popup/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (chunkData) => `${chunkData.chunk.name}.js`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: "src/popup/index.html",
      chunks: ["popup"],
    }),
    new CopyWebpackPlugin(["manifest.json", { from: "assets", to: "assets" }]),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"),
    },
  },
};
