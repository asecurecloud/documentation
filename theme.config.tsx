import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>ASecureCloud Documentation</span>,
  project: {
    link: 'https://github.com/rachcorp/Docs',
  },
  docsRepositoryBase: 'https://github.com/rachcorp/Docs',
  navigation: {
    prev: true,
    next: true
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    content: 'ASecureCloud © 2025',
  },
}

export default config
