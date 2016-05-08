const webpack     = require('webpack')
  , express       = require('express')
  , devMiddleware = require('webpack-dev-middleware')
  , hotMiddleware = require('webpack-hot-middleware')
  , config        = require('./webpack.config')
  , app           = express()
  , port          = 3000;

if (app.get('env') === 'development') {
  const compiler = webpack(config);

  app.use(hotMiddleware(compiler));
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('public'));

app.listen(port, err => {
  err
  ? console.log(err)
  : console.log('✔ Server listening on port: ', port)
});
