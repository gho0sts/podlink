module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'PodLink',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'The easiest way to share podcasts'
      },
      {
        name: 'theme-color',
        content: '#315BF8'
      },
      { 
        hid: 'og:title', 
        property: 'og:title', 
        content: 'PodLink'
      },
      { 
        hid: 'og:description', 
        property: 'og:description', 
        content: 'The easiest way to share podcasts'
      },
      { 
        hid: 'og:image', 
        property: 'og:image', 
        content: '/apple-touch-icon.png'
      },
      { 
        hid: 'og:url', 
        property: 'og:url', 
        content: 'https://pod.link/'
      },
      { 
        hid: 'og:site_name', 
        property: 'og:site_name', 
        content: 'PodLink'
      },
      { 
        hid: 'twitter:title', 
        name: 'twitter:title', 
        content: 'PodLink'
      },
      { 
        hid: 'twitter:description', 
        name: 'twitter:description', 
        content: 'The easiest way to share podcasts'
      },
      { 
        hid: 'twitter:image', 
        name: 'twitter:image', 
        content: '/apple-touch-icon.png'
      },
		  { 
        name: 'twitter:site', content: '@_podlink'
      },
		  { 
        name: 'twitter:creator', content: '@_podlink'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'favicon-48x48.png' },
      { rel: 'mask-icon', color: '315BF8',  href: '/safari-pinned-tab.svg' },
      { rel: 'apple-touch-icon', sizes: '192x192',  href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' }
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
  serverMiddleware: [
    '~/servermiddleware/seo.js'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-clipboard2',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-WBRSGC7' }],
  ],
  plugins: [
    { src: '~/plugins/vue-plyr', ssr: false },
    { src: '~/plugins/stripHTML' }
  ],
  axios: {
    credentials: false
  }
}
