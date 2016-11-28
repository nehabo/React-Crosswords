module.exports = {
// entry point(s) for app
  entry: [
    './app/index.js',
  ],
// transcompilers location
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
// output for bundled files
  output: {
    filename: './dist/index_bundle.js',
    publicPath: '/',
  },

};
