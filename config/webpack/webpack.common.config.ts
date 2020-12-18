// shared config (dev and prod)
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  context: path.resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }, { loader: "source-map-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        use: [{ loader: "babel-loader", options: { cacheDirectory: true } }],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader", options: { postcssOptions: { config: path.resolve(__dirname, "../") } } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" })],
  performance: {
    hints: false,
  },
};

export default config;
