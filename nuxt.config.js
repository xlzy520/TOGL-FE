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
  styleResources: { // 需要添加这个 用来配置全局
    scss: [
      './assets/scss/global.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    {
      src: "~/plugins/axios",
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: process.env.API_URL,
    baseURL: "/",
    timeout: 15000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8", //charset=UTF-8
    },
    // proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
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
