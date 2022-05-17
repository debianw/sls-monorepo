const users = [
  { id: 1, firstName: 'FName #1', lastName: 'LName #1' },
  { id: 2, firstName: 'FName #2', lastName: 'LName #2' },
  { id: 3, firstName: 'FName #3', lastName: 'LName #3' },
  { id: 4, firstName: 'FName #4', lastName: 'LName #4' },
]

module.exports = ({ db }) => {
  const fetch = async () => users 
  const fetchById = () => console.log(`Fetch user by Id`)
  const fetchOne = () => console.log(`Fetch one`)

  return {
    fetch,
    fetchById,
    fetchOne
  }
}