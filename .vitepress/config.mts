import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ITAM Guide",
  description: "User guide for ITAM LIMS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/UHAS-ITAM.png',
    nav: [
      { text: 'Home', link: '/' },
    ],
    siteTitle: false,
    sidebar: [
      {
        text: 'Guide',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Introduction', link: '/Introduction' },
          { text: 'Getting Started', link: '/Getting-Started' },
          { text: 'Dashboard Overview', link: '/Dashboard-Overview' },
          { text: 'Inventory Management', link: '/Inventory-Management' },
          { text: 'Sample Registration Module', link: '/Sample-Registration_Module' },
          { text: 'Payment Module', link: '/Payment-Module' },
          { text: 'User Management Module', link: '/User-Management-Module' },

        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/amejro/itam-guide/edit/main/:path'
      
    },
    search: {
      provider: 'local'
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
   base: '/itam-guide/',
   outDir: 'docs/.vitepress/dist',
   lastUpdated: true,
})
