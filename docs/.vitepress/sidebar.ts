import { DefaultTheme } from "vitepress"
export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '开发环境',
      items: [
        { text: 'macOS', link: '/environment/macos' },
        { text: 'Windows', link: '/environment/windows' }
      ]
    }
  ]
}
