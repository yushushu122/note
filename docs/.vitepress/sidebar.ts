import { DefaultTheme } from "vitepress"
export function envSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'macOS',
      collapsed: false,
      items: [
        { text: '命令行工具', link: '/macos/command-line' },
        { text: 'Homebrew', link: '/macos/homebrew' },
        { text: '终端', link: '/macos/terminal' },
        { text: 'Java', link: '/macos/java' },
        { text: 'NodeJS', link: '/macos/nodejs' },
        { text: 'Docker', link: '/macos/docker' },
      ]
    },
    {
      text: 'Windows',
      collapsed: false,
      items: [
        { text: 'TBD', link: '/windows' }
      ]
    }
  ]
}

export function dockerSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Docker',
      items: [
        { text: '安装docker', link: '/docker/install' },
        { text: '常用命令', link: '/docker/getting-started' },
        { text: '安装MySQL', link: '/docker/mysql' },
        { text: '安装Redis', link: '/docker/redis' },
        { text: '安装RabbitMQ', link: '/docker/rabbitmq' },
        { text: '安装MinIO', link: '/docker/minio' },
      ]
    }
  ]
}
