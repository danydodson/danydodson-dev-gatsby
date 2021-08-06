import React from 'react'
import { Link } from 'gatsby'
import { PAGINATION } from '../constants'

const Pagination = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  return (
    <>
      < div>
        {hasPrevPage && (
          <Link rel='prev' to={prevPagePath} className=''>
            {PAGINATION.PREV_PAGE}
          </Link>
        )}
      </div>
      <div className='text-right'>
        {hasNextPage && (
          <Link rel='next' to={nextPagePath} className=''>
            {PAGINATION.NEXT_PAGE}
          </Link>
        )}
      </div>
    </>
  )
}

export default Pagination
