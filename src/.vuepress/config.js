module.exports = {
<<<<<<< HEAD
dest: 'docs',
base: '/ingenieria-software/',
=======
 dest: 'docs',
 base: '/ingenieria-software/',
>>>>>>> fb3bffd3cc168ef53fac855e804affe87d7d3259
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
