import { DefaultTheme } from "vitepress"
import pkg from 'vitepress/package.json'
export function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '开发环境', link: '/environment/macos/command-line', activeMatch: '/environment' },
    { text: 'docker', link: '/docker/getting-started', activeMatch: '/docker' },
    { text: '代码片段', link: '/snippets', activeMatch: '/snippets' },
    { text: '常见问题', link: '/qa', activeMatch: '/qa' }
  ]
}