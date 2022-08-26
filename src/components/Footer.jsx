import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  p {
    font-size: 1rem;
    color: var(--header-outline);
    a {
      color: white;
    }
  }
`;

const Button = styled.button`
  height: 42px;
  padding: 0 3em;
  color: inherit;
  font-family: inherit;
  letter-spacing: 4px;
  text-transform: uppercase;
  border: 3px solid var(--header-outline);
  border-radius: 0.5em;
  @media (min-width: 769px) {
    position: fixed;
    bottom: 2em;
    right: 2em;
  }
`;

const Footer = ({ onOpenModal }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onOpenModal}>
        Rules
      </Button>
      <p>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/raubaca" target="_blank" rel="noreferrer">
          Rau
        </a>
        .
      </p>
    </Wrapper>
  );
};

export default Footer;
