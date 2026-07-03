import { defineConfig } from 'vitepress'

export default defineConfig {
  title: "DRStandeeShader / タテカンシェーダ",
  base: '/DRStandeeShader/',
  description: "『DRStandeeShader / タテカンシェーダ』のオンラインマニュアルです。",
  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],
  srcDir: 'docs',
  vite: {
    publicDir: '../public' 
  },
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        siteTitle: "DRStandeeShader",
        nav: [
          { text: 'ver1.0.2', activeMatch: '' }
        ],
        sidebar: [
          { text: '概要（トップ）', link: '/' },
          { text: '導入方法', link: '/import' },
          { text: 'Lite版について', link: '/lite' },
          { text: '通常版について', link: '/standard' },
          { text: '権利表記等', link: '/license' },
          {
            text: 'ver1.0.2',
            items: []
          }
        ]
      }
    }
  }
}
