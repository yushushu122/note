import { DefaultTheme } from "vitepress"
import pkg from 'vitepress/package.json'
export function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '开发环境', link: '/environment/macos' }
  ]
}