const config = {

  title: 'Dany Dodson',
  subtitle: 'Dany Dodson',
  description: 'Dany Dodson is a software engineer...',
  username: 'danydodson',
  siteUrl: 'https://danydodson.dev',
  pathPrefix: '',
  image: 'static/logos/logo@1x.png',
  copyright: '© 2021 | Dany Dodson',
  disqusShortname: 'shortname',
  postsPerPage: 2,

  author: {
    name: 'Dany Dodson',
    email: 'danydodson@gmail.com',
    bio: 'My bio goes here...',
    location: `Evansville, IN`,
    image: 'static/cards/og@1x.png',
  },

  header: {
    title: 'Header Title',
  },

  colors: {
    gray: '#b8b8b8',
    blue: '#5eafff',
    green: '#32a852',
  },

  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },

  host: {
    name: 'GitHub',
    url: 'https://github.com/danydodson/danydodson.dev',
  },

  manifest: {
    icon: 'static/logos/logo@4x.png',
    theme_color: '#222222',
    background_color: '#ffffff',
    display: 'standalone',
  },

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/danydodson' },
    { name: 'Instagram', url: 'https://www.instagram.com/danydodson' },
    { name: 'Twitter', url: 'https://twitter.com/danydodson' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/danydodson' },
    { name: 'Codepen', url: 'https://codepen.io/danydodson' },
  ],

  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],

}

module.exports = config
