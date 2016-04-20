var webpack = require('webpack');

module.exports = {
  entry: {
    'oldBrowserNotice': './src/old-browser-notice.js',
    'oldBrowserTest': './src/old-browser-test.js'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    libraryTarget: 'var',
    library: '[name]'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {comments: false},
      compressor: {warnings: false}
    })
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          compact: true,
          presets: ['es2015']
        }
      }
    ],
    // remove newline char and surplus white space from template string
    postLoaders: [
      {
        test: /.js$/,
        loader: 'string-replace',
        query: {
          search: '\\\\n\\s+',
          replace: '',
          flags: 'g'
        }
      }
    ]
  }
};
