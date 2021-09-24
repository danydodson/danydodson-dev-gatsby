import PropTypes from 'prop-types'

const handleLinks = (location) => {

  if (location.hash) {
    const id = location.hash.substring(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView()
        el.focus()
      }
    }, 0)
  }

  const links = Array.from(document.querySelectorAll('a'))
  if (links.length > 0) {
    links.forEach(l => {
      if (l.host !== window.location.host) {
        l.setAttribute('rel', 'noopener noreferrer')
        l.setAttribute('target', '_blank')
      }
    })
  }

}

handleLinks.propTypes = {
  location: PropTypes.object.isRequired,
}

export default handleLinks