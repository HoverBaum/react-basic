const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
		main: "./src/js/index.js"
	},
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
	devtool: 'source-map',
    module: {
        loaders: [
			{
	            test: /.jsx?$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/,
	            query: {
	                presets: ['es2015', 'react']
	            }
        	}
		]
    }
}
