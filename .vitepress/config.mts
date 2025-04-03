import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ITAM Guide",
  description: "User guide for ITAM LIMS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
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

   
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
   base: '/itam-guide/',
   outDir: 'docs/.vitepress/dist',
})

