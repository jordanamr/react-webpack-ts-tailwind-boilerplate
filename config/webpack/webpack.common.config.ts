// shared config (dev and prod)
import webpack from "webpack";
import path from "path";
import { CheckerPlugin } from "awesome-typescript-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  context: path.resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "awesome-typescript-loader"],
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader", options: { postcssOptions: { config: path.resolve(__dirname, "../") } } },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
          { loader: "postcss-loader", options: { postcssOptions: { config: path.resolve(__dirname, "../") } } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [new CheckerPlugin(), new HtmlWebpackPlugin({ template: "index.html.ejs" })],
  performance: {
    hints: false,
  },
};

export default config;
