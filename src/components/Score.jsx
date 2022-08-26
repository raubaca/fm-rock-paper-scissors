import styled from 'styled-components';

const Board = styled.div`
  padding: 1em 2em;
  background: white;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 769px) {
    padding: 1em 3em;
  }
`;

const Title = styled.span`
  color: var(--score-text);
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Points = styled.h2`
  color: var(--dark-text);
  font-size: 4em;
  font-weight: 700;
`;

const Score = ({ score }) => {
  return (
    <Board>
      <Title>Score</Title>
      <Points>{score}</Points>
    </Board>
  );
};

export default Score;
