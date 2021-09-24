import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../components/icons'
import { socialLinks } from '../../data/config'
import footer from '../images/svg/footer.svg'

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  })

  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return
    // }
    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        })
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <StyledFooter>
      <StyledSocialLinks>
        {socialLinks && socialLinks.map(({ name, url }, i) => (
          <li key={i}>
            <a rel='preload' href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
      </StyledSocialLinks>
      <StyledCredit>
        <a rel='preload' href="https://github.com/bchiang7/v4">
          <div>Designed &amp; Built by Dany Dodson</div>
          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </StyledCredit>
    </StyledFooter>
  )
}

Footer.propTypes = {
  githubInfo: PropTypes.object,
}

export default Footer

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 110px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-repeat: repeat-x;
  background-color: var(--yellow-100);
  background-image: url(${footer});
  /* @media (max-width: 768px) {min-height: 160px;} */
`

const StyledSocialLinks = styled.ul`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 270px;
    padding-bottom: 24px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    a {svg {width: 20px; height: 20px;}}
  }
`

const StyledCredit = styled.div`
  line-height: 1;
  color: var(--black-100);
  font-family: var(--ff-mono);
  font-size: var(--fz-xs);
  .github-stats {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    & > span {display: inline-flex; align-items: center; :nth-child(2){margin-left: 20px;}}
    svg {width: 14px; height: 14px;}
  }
`
