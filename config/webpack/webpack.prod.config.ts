// production config
import merge from "webpack-merge";
import path from "path";
import commonConfig from "./webpack.common.config";
import webpack from "webpack";

const config: webpack.Configuration = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[fullhash].min.js",
    path: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [],
});

export default config;
