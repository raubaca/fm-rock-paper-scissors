import styled from 'styled-components';

const Coin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--circle-size);
  height: var(--circle-size);

  background: ${({ theme }) => `linear-gradient(white, white) padding-box,
    linear-gradient(var(--${theme}, white, lightblue)) border-box`};
  border: var(--circle-border) solid transparent;
  box-shadow: ${({ theme }) => `inset 0 8px rgba(0, 0, 0, 0.3),
    0 8px var(--${theme}-shadow, rgba(0, 0, 0, 0.3))`};

  border-radius: 50%;
`;

export default Coin;
