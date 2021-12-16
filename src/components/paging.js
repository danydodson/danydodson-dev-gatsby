import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { page } from '../utilities'

const Paging = ({ hasPrev, prevPath, hasNext, nextPath }) => (
  <StyledContent>
    {hasPrev && (
      <Link to={prevPath} rel="prev">
        {page.prev}
      </Link>
    )}
    {hasNext && (
      <Link to={nextPath} rel="next">
        {page.prev}
      </Link>
    )}
  </StyledContent>
)

Paging.propTypes = {
  hasPrev: PropTypes.bool,
  prevPath: PropTypes.string,
  hasNext: PropTypes.bool,
  nextPath: PropTypes.string,
}

export default Paging

const StyledContent = styled.div`
  display: flex;
`
