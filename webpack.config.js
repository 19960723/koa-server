const path = require('path')

const webpackConfig = {
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name][hash:6].bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      }
    ]
  }
}

module.exports = webpackConfig
