export default {
  head: {
    title: "frontend-app-v2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  css: [
    "element-ui/lib/theme-chalk/index.css",
    "assets/css/common.css",
    'assets/css/transition.css',
    'assets/css/iconfont.css'
  ],

  styleResources: { 
    scss: [
      './assets/scss/global.scss'
    ]
  },

  plugins: [
    "@/plugins/element-ui",
    {
      src: "~/plugins/axios",
      ssr: true,
    },
  ],

  components: true,

  buildModules: [],

  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",
  ],

  axios: {
    // baseURL: process.env.API_URL,
    baseURL: "/",
    timeout: 15000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8", //charset=UTF-8
    },
    // proxy: true,
  },

  build: {
    transpile: [/^element-ui/],
    postcss: null,
  },

  router: {
    middleware: "auth",
    extendRoutes(routes, resolve) {
      console.log(routes);
      routes.push({
        name: "home",
        path: "/index",
        component: resolve(__dirname, "pages/index.vue"),
      });
    },
  },
};
