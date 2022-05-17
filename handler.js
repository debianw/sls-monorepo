const λ = require('./src/lib/lambda')
const createService = require('./src')
const service = createService()

module.exports = {
  user: λ(service.user),
  order: λ(service.order),
}