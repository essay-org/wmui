const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const path = require('path')
// Karma configuration

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-coverage-istanbul-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: ['./index.js'],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],

    coverageIstanbulReporter: {

      // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'lcovonly', 'text-summary'],

      // base output directory
      dir: './coverage',

      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {

        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },

    // web server port
    port: 8085,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS_custom'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 375,
            height: 667
          }
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpackMiddleware: {
      noInfo: true
    },

    webpack: {
      output: {
        path: __dirname + '/lib',
        filename: '[name].js',
        libraryTarget: 'umd'
      },
      resolve: {
        modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
        extensions: ['.js', '.vue', '.json'],
        alias: {
          vue: 'vue/dist/vue.esm.js',
          packages: path.join(__dirname, '../../packages'),
          lib: path.join(__dirname, '../../lib')
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
            test: /\.(js)$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: [/node_modules/, /src\/utils/],
            include: /src|packages/,
            enforce: 'post',
            options: {
              esModules: true
            }
          },
          {
            test: /\.vue$/,
            exclude: [/Scroller\.vue/, /Swipe\.vue/],
            loaders: [{
              loader: 'vue-loader',
              options: {
                postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 10', 'iOS >= 8', 'Android >= 4']})],
                preLoaders: {
                  js: 'istanbul-instrumenter-loader?esModules=true'
                }
              }
            }]
          },
          {
            test: /\.vue$/,
            include: [/Scroller\.vue/, /Swipe\.vue/],
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
      resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
      ]
    }
  })
}
