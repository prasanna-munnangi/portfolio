import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import emailjs from 'emailjs-com';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--blue);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    margin-top: 40px;
  }
`;
const ContactForm = styled.form`
  width: 100%;
  .contact-form {
    margin: 30px;
  }
  .form-group {
    input,
    textarea {
      display: block;
      line-height: 2.5em;
      width: 100%;
      margin: 0;
      padding: 0 5px;
      border: 1px solid var(--light-slate);
      font-family: var(--font-sans);
      font-size: var(--fz-md);
    }
    #user_name {
      border-top-right-radius: 5px 5px;
      border-top-left-radius: 5px 5px;
    }
    #message {
      border-bottom-right-radius: 5px 5px;
      border-bottom-left-radius: 5px 5px;
    }
    margin-bottom: 30px;
  }

  .success-message {
    color: var(--green);
    margin: 20px;
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
  }

  .error-message {
    color: red;
    margin: 20px;
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
  }

  .submit-button {
    ${({ theme }) => theme.mixins.smallButton};
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm('service_cdpyrea', 'template_pnorbw9', e.target, 'user_dzddrWpjhh6bjqPOBWsWl')
      .then(res => {
        if (res.status === 200) {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('submitted');
        }
      })
      .catch(() => setSuccess('error'));
  };

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <h2 className="title">Contact</h2>

      <ContactForm id="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <input
            type="text"
            id="user_name"
            name="user_name"
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Name *"
            required
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email address *"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="3"
            onChange={e => setMessage(e.target.value)}
            value={message}
            placeholder="Message *"
            required
          />
        </div>
        {success && success === 'submitted' && (
          <p className="success-message">Thank you for reaching out. Will get back to you soon!</p>
        )}
        {success && success === 'error' && (
          <p className="error-message">Something went wrong, please try later!</p>
        )}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </ContactForm>
    </StyledContactSection>
  );
};

export default Contact;
