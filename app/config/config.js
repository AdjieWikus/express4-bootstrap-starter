// config for the express app
// depending on `process.env.NODE_ENV`, default is `development`

var path = require('path')
  , rootPath = path.normalize(__dirname + '/../..')

var config = {
  // Development config
  //
  development: {
    server: {
      port: 3001,
      hostname: 'localhost',
    },
    database: {
      url: 'mongodb://localhost/express4_bootstrap_starter'
    },
    BaseApiURL : 'http://localhost:3001/api/v1/',
    root     : rootPath,
    app      : {
      name : 'BlastBoom - Email and SMS Blasting'
    },
    twitterAuth: true,
    twitter: {
      consumerKey: process.env.TWITTER_KEY || 'HjuVAFjJksaCxec6fZc1jw',
      consumerSecret: process.env.TWITTER_SECRET  || 'VCMzGTZowbxIVMI5dcqpxwVpzcp2n30eee2DEEGsi7M',
      callbackURL: '/auth/twitter/callback',
      passReqToCallback: true
    },
  },
  //
  // Production Config
  //
  production: {
    server: {
      port: 8080,
      hostname: process.env.HOSTNAME || '127.0.0.1',
    },
    BaseApiURL : 'http://localhost:8080/api/v1/',
    root     : rootPath,
    app      : {
      name : 'BlastBoom - Email and SMS Blasting'
    },
    twitterAuth: true,
    twitter: {
      consumerKey: process.env.TWITTER_KEY || 'Your Consumer Key',
      consumerSecret: process.env.TWITTER_SECRET  || 'Your Consumer Secret',
      callbackURL: '/auth/twitter/callback',
      passReqToCallback: true
    },
    database: {
      url: process.env.MONGODB_CONNECTION_URI || 'mongodb://localhost/express4_bootstrap_starter'
    }
  },

  //
  // Testing config
  //
  test: {
    server: {
      port: 4001,
      hostname: 'localhost',
    },
    database: {
      url: 'mongodb://localhost/express_test'
    }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
