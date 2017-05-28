import webpack from 'webpack';
import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

/* eslint-disable no-unused-vars */
import { green, dim, bold } from 'colors';


console.log('Webpack env:'.dim.green, `${NODE_ENV}`.green.bold);


/**
 * Webpack settings used for all env.
 * @type {Object}
 */
const sharedConfig = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    //app: ['react', './index.js']
    app: './index.js',
    react: 'react',
    antd: 'antd',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.(?:jpg|png|gif)$/,
        loader: "url-loader",
        options: { limit: 100000 }
      }, {
        test: /\.scss$/,
        rules: [{
          loaders: ['style-loader', 'css-loader?modules&localIdentName=[hash:base64:5]_[local]', 'sass-loader'],
          exclude: path.resolve(__dirname, 'src/styles')
        }, {
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, 'src/styles')
        }]
      }, {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        // exclude: /node_modules/,
        use: [
          'react-hot-loader',
          {
            loader: 'babel-loader', options: {
              plugins: [
                ['import', { libraryName: "antd", style: 'css' }],
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }), // Generates default index.html
    new ExtractTextPlugin({
      filename: "[name].[hash:7].css",
      allChunks: true,
    })
  ]
};


/**
 * Webpack settings required for development env.
 * @type {Object}
 */
const devConfig = {
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[hash:7].bundle.js"
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],

  devServer: {
    historyApiFallback: true
  }
};


/**
 * Webpack settings required for Production Env
 * @type {Object}
 */
const prodConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash:7].bundle.js"
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react', 'manifest'],
      minChunks: 2
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};


// Constants
const NODE_ENV = process.env.npm_lifecycle_event === 'start' ?
  'local' : (process.env.NODE_ENV || 'development');

let envConfig;
switch (NODE_ENV) {
  case 'local':
    envConfig = {};
  case 'development':
    envConfig = devConfig;
    break;
  case 'production':
  default:
    envConfig = prodConfig;
}


// 去重合并，重复项，下面的配置 overwrite 掉上面的。
const webpackConfig = {
  ...sharedConfig,
  ...envConfig,
};

// plugins 是合并，拿 shared 和 env 进行合并。它是一个数组
webpackConfig.plugins = [
  ...sharedConfig.plugins,
  ...envConfig.plugins,
];



export { webpackConfig as default }

