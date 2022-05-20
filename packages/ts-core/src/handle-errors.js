const isArray = arr => Array.isArray(arr)

module.exports = fn => async (req, res) => {
  try {
    const data = await fn(req, res)
    return data
  } catch (error) {
    console.log('ERROR', error)
    const { message, statusCode } = error
    const code = statusCode || 500

    res.statusCode = code
    return { error: true, message, statusCode: code }
  }
}
