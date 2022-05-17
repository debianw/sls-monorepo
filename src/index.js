const users = require('./user') 
const orders = require('./order')

// Create Service
module.exports = (settings = {}) => {
  const options = {...settings}

  // models
  options.models = {
    users: users.model(options),
    orders: orders.model(options)
  }

  // api
  options.api = {
    users: users.api(options),
    orders: orders.api(options)
  }

  return {
    user: users.routes(options),
    order: orders.routes(options)
  }
}