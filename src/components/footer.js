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
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
      </StyledSocialLinks>
      <StyledCredit>
        <a href="https://github.com/bchiang7/v4">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  background-repeat: repeat-x;
  background-color: var(--yellow_200);
  background-image: url(${footer});
  
  @media (max-width: 768px) {
    min-height: 160px;
  }
`

const StyledSocialLinks = styled.ul`
  display: none;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 270px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 24px;
    list-style: none;
    
    a {
    
      svg {
        stroke: var(--blue_200);
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledCredit = styled.div`
  color: var(--black_100);
  font-family: var(--ff_mono);
  font-size: var(--fz_xxs);
  line-height: 1;
  
  a {}

  .github-stats {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  
    & > span {
      display: inline-flex;
      align-items: center;

      :nth-child(2){
        margin-left: 20px;
      }
    }

    svg {
      width: 14px;
      height: 14px;
      stroke: var(--blue_200);
    }
  }
`