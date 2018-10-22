const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    ['website']: path.resolve(__dirname, '../docs/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../template'),
    publicPath: '/',
    filename: 'website/[name].js',
    chunkFilename: 'website/[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            postcss: {
              plugins: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']})]
            }
          }
        }]
      },
      {
        test: /\.(css|scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
        loaders: [{
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }]
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 8084,
    host: '127.0.0.1',
    https: false,
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, '../docs/index.html'),
      filename: 'index.html',
      chunks: ['website'],
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
