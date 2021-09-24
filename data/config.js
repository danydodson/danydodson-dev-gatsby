const config = {
  name: `Dany Dodson`,
  username: `danydodson`,
  email: `danydodson@gmail.com`,
  image: `/og@1.png`,
  siteUrl: `https://danys.art`,
  title: `🖐️ Web & Software Engineer. Currently working remotely from the mid west.`,
  description: `💻 danydodson.dev | 🎨 danys.art | ♡ Dany Dodson`,
  bio: `Award-winning writer. Subtly charming travel advocate. Web practitioner.`,
  location: `Evansville, IN`,
  copyright: `© 2021 | Dany Dodson ♡`,
  postsPerPage: 10,
  
  navLinks: [
    { name: `About`, url: `/#about` },
    { name: `Experience`, url: `/#jobs` },
    { name: `Work`, url: `/#featured` },
    { name: `Contact`, url: `/#contact` },
  ],

  socialLinks: [
    { name: `GitHub`, url: `https://github.com/danydodson` },
    { name: `Instagram`, url: `https://www.instagram.com/dany_dodson` },
    { name: `Twitter`, url: `https://twitter.com/danydodson` },
    { name: `Linkedin`, url: `https://www.linkedin.com/in/danydodson` },
    { name: `Codepen`, url: `https://codepen.io/danydodson` },
  ],

  hello: `
    <p>Hello! My name is Dany and I enjoy creating things that live on the internet. My interest in web development started back in 2000 when I decided to try editing live Journal themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS! </p>
    <p>Fast-forward to today, and I've had the privilege of working at<a rel='preload' href='https://us.mullenlowe.com/' className='inlineLink'> an advertising agency</a>, <a rel='preload' href='https://starry.com/' className='inlineLink'>a start-up</a>, <a rel='preload' href='https://www.apple.com/' className='inlineLink'> a huge corporation</a>, and{' '}<a rel='preload' href='https://scout.camd.northeastern.edu/'>a student-led design studio</a>.My main focus these days isbuilding accessible, inclusive products and digital experiences at <a rel='preload' href='https://upstatement.com/' className='inlineLink'>Upstatement</a> for a variety of clients.</p>
    <p>Here are a few technologies I've been working with recently:</p>
  `,

  skills: ['JavaScript (ES6+)', 'React', 'Eleventy', 'Vue', 'Node.js', 'WordPress'],

  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    delay,
    distance: `20px`,
    duration: 500,
    easing: `cubic-bezier(0.645, 0.045, 0.355, 1)`,
    origin: `bottom`,
    rotate: { x: 0, y: 0, z: 0 },
    scale: 1,
    opacity: 0,
    mobile: true,
    reset: false,
    useDelay: `always`,
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  })
}

module.exports = config
