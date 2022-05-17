module.exports = ({ models }) => {
  const create = async ({ user }) => {
    console.log(`[user.api] Create user`, user)
  }

  const fetch = async () => {
    return models.users.fetch()
  }

  return {
    create,
    fetch
  }
}