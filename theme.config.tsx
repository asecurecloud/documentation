import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>API Documentation</span>,
  project: {
    link: 'https://github.com/yourusername/your-repo',
  },
  docsRepositoryBase: 'https://github.com/yourusername/your-repo',
  navigation: {
    prev: true,
    next: true
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    content: 'Your Company © 2024',
  },
}

export default config
