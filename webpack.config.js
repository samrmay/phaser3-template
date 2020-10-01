const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "src", "index.js")],
  output: {
    filename: "src/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/"),
        use: {
          loader: "babel-loader",
        },
        test: /\.(png|jpe?g|gif|svg|mp3|m4a)$/i,
        use: {
          loader: "file-loader?name=assets/[name].[ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
};
