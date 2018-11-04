const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const fs = require('fs')
const path = require('path')

module.exports = {
  entry: {
    ['index']: path.resolve(__dirname, '../packages/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: 'wmui',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  module: {
    loaders: [
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
            postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 10', 'iOS >= 8', 'Android >= 4']})]
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|svg)(\?t=\d+)?$/,
        loaders: [{
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['lib'], {
      root: path.resolve(__dirname, '../'),
    })
  ],
  resolve: {
    modules: ['node_modules']
  }
}

if(process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }))
}else {
  module.exports.devtool = 'eval-source-map'
}
