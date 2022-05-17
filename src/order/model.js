const orders = [
  { id: 1, name: 'Order #1' },
  { id: 2, name: 'Order #2' },
  { id: 3, name: 'Order #3' },
  { id: 4, name: 'Order #4' },
  { id: 5, name: 'Order #5' },
]

module.exports = ({ db }) => {
  const fetch = async () => orders 
  const fetchById = () => console.log(`Fetch order by Id`)
  const fetchOne = () => console.log(`Fetch one`)

  return {
    fetch,
    fetchById,
    fetchOne
  }
}