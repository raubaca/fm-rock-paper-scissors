import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { messages } from '../utils/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Text = styled.h4`
  font-size: 5.5em;
  text-transform: uppercase;
  @media (min-width: 769px) {
    font-size: 3.5em;
  }
`;

const PlayAgain = styled(Link)`
  width: 220px;
  height: 48px;
  background: white;
  color: var(--dark-text);
  font-family: inherit;
  font-size: 1.5em;
  letter-spacing: 2px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 1rem;
  @media (min-width: 769px) {
    font-size: 1em;
  }
`;

const Result = ({ result }) => {
  return (
    <Wrapper>
      <Text>{messages[result]}</Text>
      <PlayAgain to="/">Play Again</PlayAgain>
    </Wrapper>
  );
};

export default Result;
