'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {   //第二步
  NODE_ENV: '"development"',
  API_HOST:"/"
})
