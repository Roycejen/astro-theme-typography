import type { ThemeConfig } from '~/types'

export const userConfig: ThemeConfig = {
  site: {
    title: '反咀',
    subtitle: '记录一下，就一下',
    author: 'RoyceJen',
    description: '无人在乎',
    website: 'https://blog.roycejen.ren',
    
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/Roycejen',   // 改成你的 GitHub
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',           // ← 这里是推特
        href: 'https://twitter.com/roycejenryc',   // ← 改成你的 X/Twitter 主页链接
      },
      // 如果你有其他平台可以继续添加
      // {
      //   name: 'mastodon',
      //   href: '你的 Mastodon 链接',
      // },
    ],

    navLinks: [
      { name: 'Posts', href: '/' },
      { name: 'Archive', href: '/archive' },
      { name: 'Categories', href: '/categories' },
      { name: 'About', href: '/about' },
    ],
  },

  // 其他配置保持默认即可...
}