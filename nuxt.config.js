import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "jamstack_test",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir:'public',
    async routes() {
      const pages = await axios
        .get("https://stylelab-jamstacktest.microcms.io/api/v1/news", {
          headers: { "X-API-KEY": "e0c83144-fb8b-4ddc-84cd-e0ecd86a7337" }
        })
        .then(res =>
          res.data.contents.map(content => ({
            route: `/news/${content.id}`,
            payload: content
          }))
        );
      return pages;
    },

    async routes() {
      const pages = await axios
        .get("https://stylelab-jamstacktest.microcms.io/api/v1/detail", {
          headers: { "X-API-KEY": "e0c83144-fb8b-4ddc-84cd-e0ecd86a7337" }
        })
        .then(res =>
          res.data.contents.map(content => ({
            route: `/detail/${content.id}`,
            payload: content
          }))
        );
      return pages;
    }


  }
};
