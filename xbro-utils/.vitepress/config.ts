import { defineConfig } from "vitepress";

export default defineConfig({
  title: 'xbrother 前端函数库',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        text: '关于',
        items: [
          { text: '关于项目', link: '/README' },
          { text: '更新日志', link: '/CHANGELOG' },
          { text: '演示页面', link: '/docs/index' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: '树遍历', link: '/docDist/modules#walk' },
        ]
      }
    ],
  },
});
