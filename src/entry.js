// Require dependencies
const dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js') }
const constants = require('./constants.js')
const api = require('./api.js')

module.exports = api(dependencies, constants);
