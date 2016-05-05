const webpack       = require('webpack')
    , devMiddleware = require('webpack-dev-middleware')
    , hotMiddleware = require('webpack-hot-middleware')
    , config        = require('./webpack.config')
    , app           = require('express')()
    , compiler      = webpack(config)
    , port          = 3000;

app.use(devMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(hotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port, err => {
  err
  ? console.log(err)
  : console.log('✔ Server listening on port: ', port)
});
