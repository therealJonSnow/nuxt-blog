import dotenv from "dotenv"; dotenv.config();
const contentful = require("contentful");
const client = contentful.createClient({
 space: process.env.CONTENTFUL_SPACE,
 accessToken: process.env.CONTENTFUL_ACCESSTOKEN
}); 

export default {
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  dev: 'development',
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  devtools: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/contentful", 
    "~/plugins/posts"
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
 modules: ["@nuxtjs/markdownit"],
 markdownit: {
   injected: true
 },

 generate: {
  routes() {
    return Promise.all([
      client.getEntries({
        content_type: "blogPost"
      })
    ]).then(([blogEntries]) => {
      return [...blogEntries.items.map(entry => entry.fields.slug)];
    });
  }
 },

  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
