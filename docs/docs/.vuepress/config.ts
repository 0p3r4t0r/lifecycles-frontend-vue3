import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

// https://v2.vuepress.vuejs.org/guide/configuration.html#config-file
export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Lifecycles Frontend Docs',
  description: 'Lifecycles frontend documentation',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },

  // https://v2.vuepress.vuejs.org/reference/plugin-api.html#extendsmarkdown
  extendsMarkdown: (md) => {
      md.use(require('markdown-it-plantuml'))
  }

})