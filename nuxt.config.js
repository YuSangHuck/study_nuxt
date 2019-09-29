const pkg = require('./package')
/* eslint-disable */
require('dotenv').config();

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/vuex-persistedstate', ssr: false },
    { src: '@/plugins/vue-sweetalert2', ssr: false },
    { src: '@/plugins/axios' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    ['@nuxtjs/dotenv', { filename: '.env' }],
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // HOST: 'localhost',
    // PORT: '9090',
    // prefix: '/',
    debug: process.env.NODE_ENV !== 'production',
    // https: false,
    // progress: true
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  //   test: 'test'
  // },

  server: {
    // port: 9999,
    port: 3000,
    // host: '0.0.0.0', // default: localhost
  }
}
