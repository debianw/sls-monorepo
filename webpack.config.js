const path = require('path')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack');	

// const isLocal = slsw.lib.webpack.isLocal
const isLocal = true

module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  devtool: 'source-map',
  resolve: {
    extensions: ['.json', '.js', '.ts', '.tsx', '.jsx']
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node',
  // mode: process.env.NODE_ENV || 'development',
  // module: {
  //   // loaders: [ ... ]
  // }
};