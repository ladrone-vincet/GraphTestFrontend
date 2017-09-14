module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['react', 'env'],
        //     plugins: ['transform-decorators-legacy', 'transform-class-properties']
        //   }
        }
      }
    ]
  }
}
