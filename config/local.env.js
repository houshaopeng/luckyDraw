var path = require('path')
module.exports = {
	env: {
		NODE_ENV: '"local"',
	},
	port: 8080,
	assetsSubDirectory: 'static',
	assetsPublicPath: '/',
	proxyTable: {
		"/api": {
			// target: 'http://yibingtao-test.shanlin.com:8083',   //代理一下路径目标指向：
			target:'http://120.27.220.25:8083',
			// host: '10.1.',
			// logLevel: 'debug',
			changeOrigin: true,
			// pathRewrite:'/^api'
			pathRewrite: {'^/api' : ''},
		},
	},
	// CSS Sourcemaps off by default because relative paths are "buggy"
	// with this option, according to the CSS-Loader README
	// (https://github.com/webpack/css-loader#sourcemaps)
	// In our experience, they generally work as expected,
	// just be aware of this issue when enabling this option.
	cssSourceMap: false
}