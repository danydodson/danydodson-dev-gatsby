import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import footer from '../assets/svg/footer.svg'
import { Icon, IconStar } from '../components/icons'
import { socialLinks } from '../config'


const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null
  })

  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return
    // }
    fetch('https://api.github.com/repos/danydodson/danydodson-dev')
      .then(res => res.json())
      .then(json => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count
        })
      })
      .catch(e => {
        throw e
      })
  }, [])

  return (
    <StyledFooter>
      <StyledSocialLinks>
        {socialLinks &&
          socialLinks.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialLinks>
      <StyledCredit>
        <a href='https://api.github.com/repos/danydodson/danydodson-dev'>
          <div>Designed &amp; Built by Dany Dodson</div>
          {githubInfo.stars || githubInfo.forks && (
            <div className='github-stats'>
              <span>
                <Icon name='Star' />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name='Fork' />
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
  githubInfo: PropTypes.object
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
  background-color: var(--_yellow-1);
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
    a {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledCredit = styled.div`
  line-height: 1.3;
  font-size: var(--xs);
  color: var(--_black-2);
  font-family: var(--mono);
  .github-stats {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    & > span {
      display: inline-flex;
      align-items: center;
      :nth-child(2) {
        margin-left: 20px;
      }
    }
    svg {
      width: 14px;
      height: 14px;
    }
  }
`
