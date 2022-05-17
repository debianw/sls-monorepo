module.exports = ({ models }) => {
  const create = async ({ order }) => {
    console.log(`[order.api] Create order`, order)
  }

  const fetch = async () => {
    return models.orders.fetch()
  }

  return {
    create,
    fetch
  }
}