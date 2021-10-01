import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '../components';

// site.com/categories

const CategoriesTemplate = ({ data, location }) => {
  const categories = data.allMarkdownRemark.group;

  return (
    <Layout location={location}>
      <Head title={`Filter by Category `} />

      <StyledCategoriesSection>
        <h2>All Catagories</h2>

        <ul>
          {categories.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/category/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </StyledCategoriesSection>
    </Layout>
  );
};

export const CategoriesQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

CategoriesTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default CategoriesTemplate;

const StyledCategoriesSection = styled.section`
  padding: 100px 0 0 50px;

  h2 {
    padding-top: 20px;
  }
`;
