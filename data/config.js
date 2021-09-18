const config = {

  title: '♡ Dany Dodson',
  subtitle: '♡',
  image: 'static/og.png',
  description: '🤍 Web & Software Engineer',
  username: 'danydodson',
  siteUrl: 'https://danydodson-dev.netlify.app/',
  copyright: '© 2021 | Dany Dodson',
  disqusShortname: 'shortname',
  postsPerPage: 10,

  name: 'Dany Dodson',
  bio: 'Award-winning writer. Subtly charming travel advocate. Web practitioner.',
  email: 'danydodson@gmail.com',
  location: `Evansville, IN`,
  
  navLinks: [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#featured' },
    { name: 'Contact', url: '/#contact' },
  ],

  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/danydodson' },
    { name: 'Instagram', url: 'https://www.instagram.com/dany_dodson' },
    { name: 'Twitter', url: 'https://twitter.com/danydodson' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/danydodson' },
    { name: 'Codepen', url: 'https://codepen.io/danydodson' },
  ],

  manifest: {
    display: 'standalone',
    theme_color: '#1b1f23',
    background_color: '#fafffd',
    icon: 'src/images/logos/logo@4x.png',
  },

  host: {
    name: 'GitHub',
    url: 'https://github.com/danydodson/danydodson-dev',
  },

  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },

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
  })
}

module.exports = config
