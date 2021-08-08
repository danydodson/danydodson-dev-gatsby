import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import { useCategoriesList } from '../hooks'

// site.com/categories

const CategoriesListTemplate = () => {
  const categories = useCategoriesList()

  return (
    <Layout>
      <p>
        Catagories list Page
      </p>
      <ul>
        {categories.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category/${category.fieldValue}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default CategoriesListTemplate
