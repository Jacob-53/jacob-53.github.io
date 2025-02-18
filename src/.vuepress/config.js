import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: "Jacob's blog",
  description: "My Notes on What I've Seen and Learned",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Jacob blog' }],
    ['meta', { property: 'og:description', content: "My Notes on What I've Seen and Learned.제이콥 기술블로그. 콥블로그." }],
    ['meta', { property: 'og:image', content: 'https://blog.jacob53.shop/images/jacobtemplate.png' }],
    ['meta', { property: 'og:url', content: 'https://blog.jacob53.shop' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'Jacob blog',
    //   description: "My Notes on What I've Seen and Learned",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'Jacob blog',
    //   description: "My Notes on What I've Seen and Learned",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/doh.webp",
    logoDark: "/images/doh.webp",

    repo: "https://github.com/Jacob-53/jacob-53.github.io",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "Github", link: "https://github.com/Jacob-53" },
      { text: "Resume ", link: "/resume" },
    ],

    sidebar: {
      "/": [
        {
          text: "It's me",
          collapsible: true,
          children: [
            "/itsme"
          ],
        },
        {
          text: "Blog",
          collapsible: true,
          children: [
            "/jacobblog",
          ],
        },
        {
          text: "Resume",
          collapsible: true,
          children: [
            "/resume",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-EWM1KL3EGB",
      debug: true,
    }),
  ],

})
