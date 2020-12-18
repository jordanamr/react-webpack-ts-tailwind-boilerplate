// development config
import webpack from "webpack";
import merge from "webpack-merge";
import path from "path";
import commonConfig from "./webpack.common.config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = merge(commonConfig, {
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom", // replaces the "react-dom" package with additional patches to support hot reloading
    },
  },
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "../../tsconfig.json"),
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],
});

export default config;
