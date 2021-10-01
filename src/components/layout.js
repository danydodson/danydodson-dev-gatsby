import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Styles, theme } from '../styles';

import { Head, Nav, Social, Email, Loader, Footer } from '../components';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  function handleLinks() {
    const links = Array.from(document.querySelectorAll('a'));
    if (links.length > 0) {
      links.forEach(ln => {
        if (ln.host !== window.location.host) {
          ln.setAttribute('rel', 'noopener noreferrer');
          ln.setAttribute('target', '_blank');
        }
      });
    }
  }

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }

    handleLinks();
  }, [isLoading, location.hash]);

  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <Styles />

          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <div className="layout">
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />
              {children}
              <Footer />
            </div>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
