import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--blue);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const fadeIn = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const slideIn = keyframes`
0% {opacity: 0; transform: translateY(-100px); filter: blur(10px);}
100% {opacity: 1; transform: translateY(0px); filter: blur(0px);}
`;

const JobSummary = styled.div`
  p {
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 6s;
  }
`;
const JobTitle = styled.div`
  h3 {
    opacity: 0;
    animation-name: ${slideIn};
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 3.8s;
  }
`;
const AnimatedComponent = styled.div`
  @media (max-width: 480px) {
    h1 {
      margin-top: 60px;
    }
  }

  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  h1 > span:nth-child(1) {
    animation-delay: 0.1s;
  }
  h1 > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  h1 > span:nth-child(3) {
    animation-delay: 0.3s;
  }
  h1 > span:nth-child(4) {
    animation-delay: 0.4s;
  }

  h1 > span:nth-child(5) {
    animation-delay: 0.5s;
  }
  h1 > span:nth-child(6) {
    animation-delay: 0.7s;
  }
  h1 > span:nth-child(7) {
    animation-delay: 0.8s;
  }
  h1 > span:nth-child(8) {
    animation-delay: 0.9s;
  }
  h1 > span:nth-child(9) {
    animation-delay: 1s;
  }
  h1 > span:nth-child(10) {
    animation-delay: 1.1s;
  }
  h1 > span:nth-child(11) {
    animation-delay: 1.2s;
  }
  span:nth-child(12) {
    animation-delay: 1.3s;
  }
  h1 > span:nth-child(13) {
    animation-delay: 1.4s;
  }
  h1 > span:nth-child(14) {
    animation-delay: 1.5s;
  }
  h2 > span:nth-child(1) {
    animation-delay: 1.7s;
  }
  h2 > span:nth-child(1) {
    animation-delay: 1.8s;
  }
  h2 > span:nth-child(2) {
    animation-delay: 1.9s;
  }
  h2 > span:nth-child(3) {
    animation-delay: 2s;
  }
  h2 > span:nth-child(4) {
    animation-delay: 2.1s;
  }
  h2 > span:nth-child(5) {
    animation-delay: 2.2s;
  }
  h2 > span:nth-child(6) {
    animation-delay: 2.3s;
  }
  h2 > span:nth-child(7) {
    animation-delay: 2.4s;
  }
  h2 > span:nth-child(8) {
    animation-delay: 2.5s;
  }
  h2 > span:nth-child(9) {
    animation-delay: 2.6s;
  }
  h2 > span:nth-child(10) {
    animation-delay: 2.7s;
  }
  h2 > span:nth-child(11) {
    animation-delay: 2.8s;
  }
  h2 > span:nth-child(12) {
    animation-delay: 2.9s;
  }
  h2 > span:nth-child(13) {
    animation-delay: 3s;
  }
  h2 > span:nth-child(14) {
    animation-delay: 3.1s;
  }
  h2 > span:nth-child(15) {
    animation-delay: 3.2s;
  }
  h2 > span:nth-child(16) {
    animation-delay: 3.3s;
  }
  h2 > span:nth-child(17) {
    animation-delay: 3.4s;
  }
  h1 > span.space {
    margin-left: 5px;
  }

  h2 > span.space {
    margin-left: 10px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const intro_arr = 'Hi, my name is'.split('');
  const name_arr = 'Prasanna Kumar M.'.split('');

  const one = (
    <AnimatedComponent>
      <h1>
        {intro_arr.map((item, index) => (
          <span className={`${item === ' ' ? 'space' : ''}`} key={index}>
            {item}
          </span>
        ))}
      </h1>
      <h2 className="big-heading">
        {name_arr.map((item, index) => (
          <span className={`${item === ' ' ? 'space' : ''}`} key={index}>
            {item}
          </span>
        ))}
      </h2>
    </AnimatedComponent>
  );
  const two = (
    <JobTitle>
      <h3 className="big-heading">I work as Senior Software Engineer.</h3>
    </JobTitle>
  );
  const three = (
    <JobSummary>
      <p>
        I'm an accomplished Senior Software Engineer with 7+ years of experience leading projects by
        acting as architect, developer and programmer analyst. Proficient in supporting project
        deliverables and maintaining releases. Strong leader in guiding support teams and solving
        complex issues. Steadfast in planning and implementing effective development strategies
        based on industry best practices. Well versed with Software Development Life Cycle (SDLC)
        process which includes requirement analysis, design, development, testing and
        implementation. at{' '}
        <a href="https://infotechinc.com/" target="_blank" rel="noreferrer">
          Info Tech Inc.,
        </a>
      </p>
    </JobSummary>
  );

  const items = [one, two, three];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
