var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://postgres:postgres@localhost/api-agitech-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://postgres:postgres@localhost/api-agitech-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-agitech'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://postgres:postgres@localhost/api-agitech-production'
  }
};

module.exports = config[env];