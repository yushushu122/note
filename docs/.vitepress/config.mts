import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "Hūúǔù",
  description: "个人笔记",
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://chenzhenhu.com/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://chenzhenhu.com/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luckywh0/note' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} HU`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
    },
  },
  sitemap: {
    hostname: 'https://chenzhenhu.com'
  }
})
