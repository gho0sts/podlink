const redirects = require('../premium.json')

module.exports = function (req, res, next) {
  const url = req.url
  let pathname = url

  if(url.includes('?')){
    pathname = url.substr(0, url.indexOf('?'))
  }

  const redirect = redirects.find(r => r.from === pathname)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  }
}
