const { router } = require('microrouter')
const createRouter = require('../lib/router')

module.exports = ({ api }) => {
  const { get } = createRouter()

  const fetch = async () => {
    return api.orders.fetch()
  }

  return router(
    get('/orders', fetch),
    get('/orders/:id', fetch)
  ) 
}