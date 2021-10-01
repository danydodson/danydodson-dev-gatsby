/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import contact from '../../assets/svg/contact.svg';
import config from '../../../content/meta/config';
import { sr } from '../../utilities';

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig());
  }, []);

  return (
    <StyledContactSection id="contact">
      <StyledContactArticle ref={revealContainer}>
        <h2 className="numbered-heading overline">What’s Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a className="email-link" href={`mailto:${config.email}`}>
          Say Hello
        </a>
      </StyledContactArticle>
    </StyledContactSection>
  );
};

export default Contact;

const StyledContactSection = styled.section`
  background-color: #fafffd;
  background-repeat: repeat-x;
  background-image: url(${contact});

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--_green-1);
    font-family: var(--mono);
    font-size: var(--md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const StyledContactArticle = styled.article`
  div.fonts {
    padding: 40px 80px;
    & > p {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`;
