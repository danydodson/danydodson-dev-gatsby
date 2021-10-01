import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Hero, About, Featured, Projects, Jobs, Posts, Contact } from '../components';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <main id="content">
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Jobs />
      <Posts />
      <Contact />
    </main>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
