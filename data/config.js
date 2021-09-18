const config = {

  title: 'Dany Dodson',
  subtitle: 'Dany Dodson',
  description: 'Dany Dodson is a software engineer...',
  username: 'danydodson',
  siteUrl: 'https://danydodson.dev',
  pathPrefix: '',
  image: 'src/images/logos/logo@1.png',
  copyright: '© 2021 | Dany Dodson',
  disqusShortname: 'shortname',
  postsPerPage: 10,

  author: {
    name: 'Dany Dodson',
    email: 'danydodson@gmail.com',
    bio: 'My bio goes here...',
    location: `Evansville, IN`,
    image: 'static/og@square.png',
  },

  header: {
    title: 'Header Title',
  },

  colors: {
    grey: '#b8b8b8',
    blue: '#5eafff',
    green: '#32a852',
  },

  host: {
    name: 'GitHub',
    url: 'https://github.com/danydodson/danydodson.dev',
  },

  manifest: {
    icon: 'src/images/logos/logo@4.png',
    theme_color: '#222222',
    background_color: '#ffffff',
    display: 'standalone',
  },

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/danydodson' },
    { name: 'Instagram', url: 'https://www.instagram.com/dany_dodson' },
    { name: 'Twitter', url: 'https://twitter.com/danydodson' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/danydodson' },
    { name: 'Codepen', url: 'https://codepen.io/danydodson' },
  ],

  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#featured' },
    { name: 'Contact', url: '/#contact' },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },

}

module.exports = config
