var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
  // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
  // various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapLocal = (env === 'local' && config.local.cssSourceMap)
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapTest = (env === 'test' && config.test.productionSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapLocal || cssSourceMapDev || cssSourceMapTest || cssSourceMapProd

//config publicPath
var publicPathLocal = (env === 'local' && config.local.assetsPublicPath);
var publicPathDev = (env === 'development' && config.dev.assetsPublicPath);
var publicPathTest = (env === 'test' && config.test.assetsPublicPath);
var publicPathProd = (env === 'production' && config.build.assetsPublicPath);
var publicPath = publicPathLocal || publicPathDev || publicPathTest || publicPathProd

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'SRC': path.resolve(__dirname, '../src'),
      'ASSET': path.resolve(__dirname, '../src/assets'),
      'COMPONENT': path.resolve(__dirname, '../src/components'),
      'VENDOR': path.resolve(__dirname, '../src/vendor'),
      'SERVICE': path.resolve(__dirname, '../src/services'),
      'PAGE': path.resolve(__dirname, '../src/pages'),
      'UTIL': path.resolve(__dirname, '../src/utils'),
      'ROUTE': path.resolve(__dirname, '../src/routes'),
      'FILTER': path.resolve(__dirname, '../src/filters'),
      'STATIC':path.resolve(__dirname, '../static'),
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: useCssSourceMap
    }),
    loaders: {
      scss: ['vue-style-loader','css', 'sass'].join('!')
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}