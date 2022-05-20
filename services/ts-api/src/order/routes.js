import { router } from 'microrouter'
import createRouter from 'ts-core/src/router'

export default ({ api }) => {
  const { get } = createRouter()

  const fetch = async () => {
    return api.order.fetch()
  }

  return router(get('/orders', fetch), get('/orders/:id', fetch))
}
