import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { PAGINATION } from '../constants'

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <StyledContent>
      <div>
        {hasPrevPage && (
          <Link to={prevPagePath} rel='prev'>
            {PAGINATION.PREV_PAGE}
          </Link>
        )}
      </div>
      <div>
        {hasNextPage && (
          <Link to={nextPagePath} rel='next'>
            {PAGINATION.NEXT_PAGE}
          </Link>
        )}
      </div>
    </StyledContent>
  )
}

export default Pagination

const StyledContent = styled.div`
  display: flex;
`
