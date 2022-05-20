'use strict'

const router = require('microrouter')
const UrlPattern = require('url-pattern')

const METHODS = ['get', 'post', 'put', 'del', 'patch']

module.exports = ({ mountPath = '' } = {}) => {
  return METHODS.reduce((methods, key) => {
    methods[key] = (path, handler) => {
      const url = `${mountPath}${path}`.replace(/\/$/, '')

      const pattern = new UrlPattern(url, {
        segmentNameCharset: 'a-zA-Z0-9_\\-',
        segmentValueCharset: 'a-zA-Z0-9@.+\\-_',
      })

      return router[key](pattern, handler)
    }

    return methods
  }, {})
}
