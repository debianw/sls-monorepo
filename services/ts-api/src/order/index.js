import createModel from './model'
import createApi from './api'
import createRoutes from './routes'

const config = {}

export default () => {
  const options = { ...config }

  // Set configuration
  options.db = options.db || {}

  // Set model
  options.model = {
    order: createModel(options)
  }

  // Set api
  options.api = {
    order: createApi(options)
  }

  return createRoutes(options)
}
