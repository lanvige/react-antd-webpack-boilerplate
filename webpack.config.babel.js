import webpack from 'webpack';
import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


// console.log('Webpack env:', `${NODE_ENV}`);


/**
 * Webpack settings used for all env.
 * @type {Object}
 */
const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    // app: ['react', './index.js']
    app: './index.js',
    react: 'react',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:7].bundle.js',
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }, {
        test: /\.(?:jpg|png|gif)$/,
        loader: 'url-loader',
        options: { limit: 100000 },
      }, {
        test: /\.scss$/,
        rules: [{
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, 'src'),
        }],
      }, {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }), // Generates default index.html
    new ExtractTextPlugin({
      filename: '[name].[hash:7].css',
      allChunks: true,
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};

export { webpackConfig as default };
