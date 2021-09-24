import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { page } from '../utils'

const Paging = ({ hasPrev, prevPath, hasNext, nextPath }) => {

  return (
    <StyledContent>
      {hasPrev && (
        <Link to={prevPath} rel='prev'>
          {page.prev}
        </Link>
      )}
      {hasNext && (
        <Link to={nextPath} rel='next'>
          {page.prev}
        </Link>
      )}
    </StyledContent>
  )
}

Paging.propTypes = {
  hasPrevious: PropTypes.bool,
  previous: PropTypes.string,
  hasNext: PropTypes.bool,
  next: PropTypes.string,
}

export default Paging

const StyledContent = styled.div`
  display: flex;
`
