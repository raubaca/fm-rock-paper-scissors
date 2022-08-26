import { createPortal } from 'react-dom';
import styled from 'styled-components';

import rules from '../assets/image-rules.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100%;
  padding: 2em;
  background: white;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'title close' 'image image';
    width: auto;
    height: auto;
    border-radius: 1em;
  }
  img {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: var(--dark-text);
  text-transform: uppercase;
  font-size: 3em;
  @media (min-width: 769px) {
    font-size: 2em;
  }
`;

const Close = styled.button`
  color: var(--header-outline);
  font-size: 4em;
  line-height: 1;
  @media (min-width: 769px) {
    font-size: 2em;
  }
`;

const Modal = ({ isOpen, onCloseModal }) => {
  if (!isOpen) return null;

  const modal = (
    <Overlay>
      <Content role="alert">
        <Title style={{ gridArea: 'title' }}>Rules</Title>
        <img src={rules} alt="Rules" style={{ gridArea: 'image' }} />
        <Close
          type="button"
          onClick={onCloseModal}
          style={{ gridArea: 'close' }}
        >
          &times;
        </Close>
      </Content>
    </Overlay>
  );

  return createPortal(modal, document.getElementById('modal'));
};

export default Modal;
