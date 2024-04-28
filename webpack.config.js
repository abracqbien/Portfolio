const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const devMode = true

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader, // Inject CSS into the DOM in development. In production, extract CSS into a separate file.
          "css-loader",
          "postcss-loader",
          "sass-loader", // If you're using SCSS
        ],
      },
      {
        test: /\.(gif|png|jpg|jpe?g|svg|mp4)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    // new HtmlWebpackPlugin({
    //   title: "Production",
    // }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Containers: path.resolve(__dirname, "./src/containers"),
      Images: path.resolve(__dirname, "./src/assets/Images"),
      Videos: path.resolve(__dirname, "./src/assets/Videos"),
      Utils: path.resolve(__dirname, "./src/utils"),
      Redux: path.resolve(__dirname, "./src/redux"),
      Hooks: path.resolve(__dirname, "./src/hooks"),
    },
    extensions: ["*", ".js", ".jsx"],
  },
}
