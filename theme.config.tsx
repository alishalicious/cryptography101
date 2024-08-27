import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps(){
    return{
      titleTemplate: '%s | Cryptography101- your ultimate handbook for cyrptography and stuff'
    }
  }
  logo: <span>Cryptography101</span>,
  project: {
    link: 'https://github.com/iamhoor/cryptography101',
  },
  chat: {
    link: 'https://discord.gg/DpXy8CpN4U',
  },
  docsRepositoryBase: 'https://github.com/iamhoor/cryptography101/tree/main',
  footer: {
    text: '© 2024 Cryptography101',
  },
}

export default config
