import PropTypes from 'prop-types'

const getColor = ({ categories, category }) => {
  return categories.find(cat => cat.fieldValue === category).categoryColor
}

getColor.propTypes = {
  categories: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
}

export default getColor
