const { router } = require('microrouter')
const createRouter = require('../lib/router')

module.exports = ({ api }) => {
  const { get } = createRouter()

  const fetch = async () => {
    return api.users.fetch()
  }

  return router(
    get('/users', fetch),
    get('/users/:id', fetch)
  ) 
}