module.exports = {
  mode: 'development',

  entry: {
    main: './main.ts'
  },

  target: 'electron-main',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}