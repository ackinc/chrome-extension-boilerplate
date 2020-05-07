const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    foreground: "./src/foreground/index.js",
    background: "./src/background/index.js",
    popup: "./src/popup/main.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: (chunkData) => `${chunkData.chunk.name}.js`,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loaders: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff2?|eot|ttf|svg)$/i,
        use: [{ loader: "url-loader", options: { limit: 16384 } }],
      },
    ],
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
    extensions: [".js", ".jsx"],
  },
};
