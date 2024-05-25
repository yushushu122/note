import { DefaultTheme } from "vitepress"
export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'macOS',
      collapsed: false,
      items: [
        { text: '命令行工具', link: '/environment/macos#安装-xcode-command-line-tools' },
        { text: 'Homebrew', link: '/environment/macos#homebrew' },
        { text: '终端', 
          items: [
            { text: 'iTerm2', link: '/environment/macos#终端' },
            { text: 'Oh My Zsh', link: '/environment/macos#oh-my-zsh' },
            { text: '安装主题', link: '/environment/macos#安装主题' },
            { text: '安装字体', link: '/environment/macos#安装字体' },
          ]
        },
        { text: 'Java', link: '/environment/macos#安装-java' },
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
