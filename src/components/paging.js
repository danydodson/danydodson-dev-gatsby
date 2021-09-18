import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PAGINATION } from '../constants'

const Paging = ({ hasPrev, prevPath, hasNext, nextPath }) => {

  return (
    <StyledContent>
      {hasPrev && (
        <Link to={prevPath} rel='prev'>
          {PAGINATION.PREV_PAGE}
        </Link>
      )}
      {hasNext && (
        <Link to={nextPath} rel='next'>
          {PAGINATION.NEXT_PAGE}
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
