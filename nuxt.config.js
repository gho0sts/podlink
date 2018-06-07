module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PodLink',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'favicon-48x48.png' },
      { rel: 'mask-icon', color: '315BF8',  href: '/safari-pinned-tab.svg' },
      { rel: 'apple-touch-icon', sizes: '192x192',  href: '/apple-touch-icon.png' }
    ]
  },
  css: [
    'assets/main.css'
  ],
  loading: { color: '#315BF8' },
  build: {
    postcss: [
      require('postcss-cssnext')({
        features: {
          customProperties: false
        }
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WBRSGC7' }],
  ],
  plugins: [
    '~plugins/vue-js-modal',
    { src: '~/plugins/localStorage', ssr: false }
  ]
}
