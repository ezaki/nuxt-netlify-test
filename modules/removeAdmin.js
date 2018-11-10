const del = require('del')

module.exports = function () {
  this.nuxt.hook('generate:done', () => {
    process.env.URL === 'https://unruffled-thompson-9e9a9b.netlify.com' &&
    del.sync(['dist/admin/**'])
  })
}
