const redirects = require('../redirects.json')

module.exports = function (req, res, next) {
  const url = req.url
  let pathname = url

  if(url.includes('?')){
    pathname = url.substr(0, url.indexOf('?'))
  }

  const redirect = redirects.find(r => r.from === pathname)
  if (redirect) {
    if (redirect.autoforward && /iPad|iPhone|iPod|Android/.test(req.headers['user-agent'])) {
      if (/iPad|iPhone|iPod/.test(req.headers['user-agent'])) {
        console.log(`redirect: ${redirect.from} => ${redirect.to}`)
        res.writeHead(301, { Location: redirect.autoforward.ios })
        res.end()
      } else {
        console.log(`redirect: ${redirect.from} => ${redirect.to}`)
        res.writeHead(301, { Location: redirect.autoforward.android })
        res.end()
      }
    } else {
      console.log(`redirect: ${redirect.from} => ${redirect.to}`)
      res.writeHead(301, { Location: redirect.to })
      res.end()
    }
  } else {
    next()
  }
}