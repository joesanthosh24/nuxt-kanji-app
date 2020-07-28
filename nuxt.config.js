export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#8B0000" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCaw5_29jdZHspxDuwZ_zOB4Kg2YyX4ZcQ",
          authDomain: "kanji-app-edee4.firebaseapp.com",
          databaseURL: "https://kanji-app-edee4.firebaseio.com",
          projectId: "kanji-app-edee4",
          storageBucket: "kanji-app-edee4.appspot.com",
          messagingSenderId: "382303153937",
          appId: "1:382303153937:web:f756a3e9f24b84b6a166b0"
        },
        services: {
          auth: true
        }
      }
    ]
  ],
  axios: {
    baseURL: "https://kanjiapi.dev/v1/",
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
