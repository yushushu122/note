import { DefaultTheme } from "vitepress"
export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'macOS',
      collapsed: false,
      items: [
        { text: '命令行工具', link: '/environment/macos/command-line' },
        { text: 'Homebrew', link: '/environment/macos/homebrew' },
        { text: '终端', link: '/environment/macos/terminal' },
        { text: 'Java', link: '/environment/macos/java' },
        { text: 'Docker', link: '/environment/macos/docker' },
      ]
    },
    {
      text: 'Windows',
      collapsed: false,
      items: [
        { text: 'TBD', link: '/environment/windows' }
      ]
    }
  ]
}
