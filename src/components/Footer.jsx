import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  @media (min-width: 769px) {
    position: fixed;
    bottom: 2em;
    right: 2em;
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
`;

const Footer = ({ onOpenModal }) => {
  return (
    <Wrapper>
      <Button type="button" onClick={onOpenModal}>
        Rules
      </Button>
    </Wrapper>
  );
};

export default Footer;
