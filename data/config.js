const config = {
  // 
  site: {
    title: 'Dany Dodson',
    subtitle: 'Dany Dodson',
    description: 'Dany Dodson is a software engineer...',
    siteUrl: 'https://danydodson.dev',
    pathPrefix: '',
    image: 'src/images/logo@1x.png',
    copyright: '© 2021 | Dany Dodson',
    disqusShortname: 'shortname',
    postsPerPage: 6,
  },
  // 
  author: {
    name: 'Dany Dodson',
    email: 'danydodson@gmail.com',
    bio: 'My bio goes here...',
    location: `Evansville, IN`,
    image: 'src/images/og@1x.png',
  },
  // 
  header: {
    title: 'Header Title',
  },
  // 
  algolia: {
    appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : '',
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY : '',
    indexName: process.env.ALGOLIA_INDEX_NAME ? process.env.ALGOLIA_INDEX_NAME : '',
  },
  // 
  host: {
    name: 'GitHub',
    url: 'https://github.com/danydodson/danydodson.dev',
  },
  // 
  metadata: {
    icon: 'src/images/logo@4x.png',
    theme_color: '#222222',
    background_color: '#ffffff',
    display: 'standalone',
  },
  // 
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/danydodson' },
    { name: 'Instagram', url: 'https://www.instagram.com/danydodson' },
    { name: 'Twitter', url: 'https://twitter.com/danydodson' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/danydodson' },
    { name: 'Codepen', url: 'https://codepen.io/danydodson' },
  ],
  // 
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  // 
  colors: {
    grey: '#cccccc',
    blue: '#58a6ff',
  }
}

module.exports = config
