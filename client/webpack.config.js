const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:"./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3030, // you can change the port,
    historyApiFallback: true, 
    historyApiFallback: {
        index: '/index.html',
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};