import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps(){
    return{
      titleTemplate: '%s | Cryptography101- your ultimate handbook for cyrptography and stuff'
    }
  },
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Cryptography101" />
      <meta property="og:description" content="Your ultimate handbook for cryptography and stuff" />
      <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
    </>
  ),
}

export default config
