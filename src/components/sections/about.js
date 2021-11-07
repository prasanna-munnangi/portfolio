import React, { useEffect, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import Icon from '../icons/icon';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 10px 10px;
    padding: 0;
    margin: 35px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }

    img,
    svg {
      width: 25px;
      height: auto;
      margin-right: 10px;
    }
  }
`;
// const StyledPic = styled.div`
//   position: relative;
//   max-width: 300px;

//   @media (max-width: 768px) {
//     margin: 50px auto 0;
//     width: 70%;
//   }

//   .wrapper {
//     ${({ theme }) => theme.mixins.boxShadow};
//     display: block;
//     position: relative;
//     width: 100%;
//     border-radius: var(--border-radius);
//     background-color: var(--blue);

//     &:hover,
//     &:focus {
//       background: transparent;
//       outline: 0;

//       &:after {
//         top: 15px;
//         left: 15px;
//       }

//       .img {
//         filter: none;
//         mix-blend-mode: normal;
//       }
//     }

//     .img {
//       position: relative;
//       border-radius: var(--border-radius);
//       mix-blend-mode: multiply;
//       filter: grayscale(100%) contrast(1);
//       transition: var(--transition);
//     }

//     &:before,
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:before {
//       top: 0;
//       left: 0;
//       background-color: var(--navy);
//       mix-blend-mode: screen;
//     }

//     &:after {
//       border: 2px solid var(--blue);
//       top: 20px;
//       left: 20px;
//       z-index: -1;
//     }
//   }
// `;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Ruby On Rails',
    'JavaScript',
    'React',
    'AWS',
    'Redux',
    'MySQL',
    'Vue',
    'TypeScript',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Prasanna and I am passionate about solving challenging problems. I
              started web development in early 2014 as a full stack engineer right after my Masters
              in Management Information Systems. I strive to write quality code with good test
              coverage. I currently work as Senior Software Engineer, interact with cross functional
              teams, engage in planning and grooming of the cards, make technical decisions on the
              architecture, build new features, perform code reviews and fix high priority
              production bugs.
            </p>
            <p>
              I use AWS Codepipline for running test suite, S3 to store documents. My main focus
              these days is working on a online bidding flatform{' '}
              <a
                href="https://www.bidexpress.com"
                target="_blank"
                aria-label="Bidexpress site"
                rel="noreferrer">
                BidExpress
              </a>
              , building bid analytics dashboard, enhancing webcrypto digital ID process, migrating
              the data from Mongodb to AWS S3 in a Ruby on Rails application.
            </p>
            <p>
              I am an AWS certified Developer Associate and was awarded MVP of the team in
              Code-a-thon competition.
            </p>

            <p>
              Here are a few technologies I’ve been working with recently: (Please check out my
              resume on the top right for full list of technologies)
            </p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li key={i}>
                  <span className={skill.replace(/\s/g, '')}>
                    <Icon name={skill.replace(/\s/g, '')} />
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
          </ul>
        </StyledText>

        {/* <StyledPic> */}
        {/* <div className="wrapper">
            <StaticImage
              className="img"
              src=""
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div> */}
        {/* </StyledPic> */}
      </div>
    </StyledAboutSection>
  );
};

export default About;
