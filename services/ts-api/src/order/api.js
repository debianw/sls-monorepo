export default ({ model }) => {
  const create = async ({ order }) => {
    console.log(`[order.api] Create order`, order)
  }

  const fetch = async () => {
    return model.order.fetch()
  }

  return {
    create,
    fetch
  }
}
