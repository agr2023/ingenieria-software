module.exports = {
 dest: docs,
 base: '/ingenieria-software/',
  title: 'Ingeniería de Software',
  description: 'Contenido digital de la asignatura Ingeniería de Software',

 
  themeConfig: {
   
    nav: [
      /*
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
     */ 
    ],
    sidebar: [
     '/',
     '/pages/tema01/',
     '/pages/tema02/',
     '/pages/tema03/',
     '/pages/tema04/',
    ]
    },

 
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
