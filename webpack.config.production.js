const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: false,

  entry: {
    index: ['./source/index.js'],
  },

  output: {
    filename: 'static/[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  performance: {
    hints: 'warning',
  },

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        include: /index.scss/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /index.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg)/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    alias: {
      api: path.resolve(__dirname, 'source/api'),
      utils: path.resolve(__dirname, 'source/utils'),
      Pages: path.resolve(__dirname, 'source/pages'),
      Models: path.resolve(__dirname, 'source/models'),
      Constants: path.resolve(__dirname, 'source/constants'),
      Components: path.resolve(__dirname, 'source/components'),
      Containers: path.resolve(__dirname, 'source/containers'),

      store: path.resolve(__dirname, 'source/store'),
      styles: path.resolve(__dirname, 'source/styles'),
      images: path.resolve(__dirname, 'source/images'),
      services: path.resolve(__dirname, 'source/services'),
      utilities: path.resolve(__dirname, 'source/utilities'),
    },
    mainFields: ['browser', 'main', 'module'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'IrisReading Reading Speed Application',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[hash].bundle.css',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
