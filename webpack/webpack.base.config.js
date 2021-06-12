const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => {
  return merge([
    {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              process.env.NODE_ENV === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
              'css-loader'
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
    },
  ]);
};