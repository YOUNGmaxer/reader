const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.pulbicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
  console.log('Dev Server listening on port 3000!\n');
});