module.exports =
  process.env.NODE_ENV === 'development'
    ? require('./webpack/webpack.dev.config')
    : require('./webpack/webpack.prod.config');