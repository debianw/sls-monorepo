const Stream = require('stream')
const qs = require('query-string')
const { run } = require('micro')
const handleErrors = require('./handle-errors')

const isString = str => typeof str === 'string'

// const parseAuth = event => {
//   if (event && event.requestContext && event.requestContext.authorizer) {
//     const { payload } = event.requestContext.authorizer

//     if (payload && isString(payload)) {
//       try {
//         const data = JSON.parse(payload)
//         Object.assign(event.requestContext.authorizer, data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     event.auth = event.requestContext.authorizer

//     // console.log('AUTHORIZER', event.auth)

//     delete event.auth.payload
//     delete event.auth.claims
//   }

//   return event
// }

const parseBody = event => {
  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch (e) {
    body = event.body
  }
  return body
}

const createRequest = (event, context) => {
  const request = new Stream.Readable()
  request._read = () => {}

  console.log('event => ', event)

  if (event.body) {
    const body = isString(event.body) ? event.body : JSON.stringify(event.body)
    request.push(body)
  }

  request.push(null)

  request.url = event.rawPath

  if (event.queryStringParameters) {
    request.url += '?' + qs.stringify(event.queryStringParameters)
  }

  // parseAuth(event)

  request.event = event
  request.context = context
  request.headers = {}
  request.rawHeaders = []
  request.httpVersion = '1.1'
  request.method = event.requestContext.http.method
  request.user = event.auth
  request.query = event.queryStringParameters

  if (event.headers.Authorization) {
    request.token = event.headers.Authorization.slice(7)
  }

  request.body = parseBody(event)

  Object.keys(event.headers || {}).forEach(key => {
    request.headers[key.toLowerCase()] = event.headers[key]
    request.rawHeaders.push(key)
    request.rawHeaders.push(event.headers[key])
  })

  return request
}

const createResponse = () => {
  const response = new Stream.Writable()
  response.statusCode = 200
  response.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  }

  response.body = ''

  response.setHeader = (key, val) => {
    response.headers[key] = val
  }

  response.getHeader = key => {
    return response.headers[key]
  }

  response._write = (chunk, encoding, done) => {
    response.body += chunk.toString()
    done()
  }

  response.respond = () => {
    return {
      //   isBase64Encoded: true,
      statusCode: response.statusCode,
      headers: response.headers,
      body: response.body
    }
  }

  return response
}

module.exports = fn => {
  // Middlewares
  // fn = handleRedirects(fn)
  // fn = handleACL(fn)
  fn = handleErrors(fn)

  return (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false
    const [req, res] = [createRequest(event, context), createResponse()]

    run(req, res, fn)
      .then(() => {
        return callback(null, res.respond())
      })
      .catch(err => callback(err))
  }
}