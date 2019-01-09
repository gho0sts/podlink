const redirects = require('../301.json')

module.exports = function (req, res, next) {
  const url = req.url
  const pathname = url.substr(0, url.indexOf('?'))
  const redirect = redirects.find(r => r.from === pathname)
  if (redirect) {
    if (redirect.autoforward && /iPad|iPhone|iPod|Android/.test(req.headers['user-agent'])) {
      if (/iPad|iPhone|iPod/.test(req.headers['user-agent'])) {
        console.log(`redirect: ${redirect.from} => ${redirect.to}`)
        res.writeHead(302, { Location: redirect.autoforward.ios })
        res.end()
      } else {
        console.log(`redirect: ${redirect.from} => ${redirect.to}`)
        res.writeHead(302, { Location: redirect.autoforward.android })
        res.end()
      }
    } else {
      console.log(`redirect: ${redirect.from} => ${redirect.to}`)
      res.writeHead(302, { Location: redirect.to })
      res.end()
    }
  } else {
    next()
  }
}