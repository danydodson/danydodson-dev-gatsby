import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import { useTagsList } from '../hooks'

// site.com/tags

const TagsListTemplate = () => {
  const tags = useTagsList()

  return (
    <Layout>
      <p>
        Tags list Page
      </p>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsListTemplate
