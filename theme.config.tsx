import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ASecureCloud Docs" />
      <meta property="og:description" content="ASecureCloud Documentation" />
      <link rel="icon" href="/images/cloud-favicon.avif" type="image/avif" />
    </>
  ),
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
