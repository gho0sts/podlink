const redirects = require('../301.json')

module.exports = function (req, res, next) {
  const redirect = redirects.find(r => r.from === req.url)
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