export default {
    /*
   ** Build for static site i.e.: netlify
   */
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'I\'am Irvis Ozuna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type:'text/css',
        href:'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        integrity:
          'sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        integrity:
          'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['swiper/dist/css/swiper.css', '~/assets/scss/resume.scss'],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/swiper.js', ssr: false },{ src: "@/plugins/aos", mode: "client" }],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
      'nuxt-sass-resources-loader',
      [
        '@/assets/scss/navigation.scss',
        '@/assets/scss/_bootstrap-overrides.scss',
        '@/assets/scss/_global.scss',
        '@/assets/scss/_mixins.scss',
        '@/assets/scss/_nav.scss',
        '@/assets/scss/_resume-item.scss',
        '@/assets/scss/_variables.scss',
        '@/assets/scss/resume.scss',
      ],
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        const options = {
          exclude: ['node_modules'],
        }
        const EslintPlugin = require('eslint-webpack-plugin')
        config.plugins.push(new EslintPlugin(options))

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === 'vue-loader'
        )
        const {
          options: { loaders },
        } = vueLoader || { options: {} }
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }
        config.module.rules.forEach((rule) => changeLoaderOptions(rule.use))
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    },
  },
}
function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets'],
          // data: '@import "_imports";'
        })
      }
    }
  }
}
