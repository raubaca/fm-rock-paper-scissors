import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { choices, rules } from '../utils/constants';
import Coin from '../components/Coin';
import Result from '../components/Result';

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'user house' 'result result';
  place-content: center;
  gap: var(--gap);
  @media (min-width: 769px) {
    grid-template-columns: auto auto auto;
    grid-template-areas: 'user result house';
    place-items: center;
  }
`;

const ChoiceHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
`;

const ChoicePlayer = styled.h3`
  font-size: 1.5em;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (min-width: 769px) {
    order: -1;
  }
`;

const Choice = styled.div`
  width: var(--circle-size);
  height: var(--circle-size);
  background: var(--placeholder);
  border-radius: 50%;
  ${({ win }) =>
    win && {
      boxShadow: 'var(--highlight)',
    }}
  @media (min-width: 769px) {
    --circle-size: 300px;
    --circle-border: 36px;
  }
`;

const ResultHolder = styled.div`
  @media (min-width: 769px) {
    padding-top: 5.5em;
  }
`;

const Game = ({ userChoice, score, onScore }) => {
  const [houseChoice, setHouseChoice] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const choice = choices[Math.floor(Math.random() * choices.length)];
      setHouseChoice(choice);
      setTimeout(() => calculateResult(userChoice, choice), 500);
    }, 500);
  }, []);

  const calculateResult = (user, house) => {
    if (user === house) {
      setResult('draw');
    } else if (rules[user].includes(house)) {
      setResult('win');
      onScore(score + 1);
    } else {
      setResult('lose');
      onScore(score - 1);
    }
  };

  return (
    <Wrapper>
      <ChoiceHolder style={{ gridArea: 'user' }}>
        <Choice win={result === 'win'}>
          <Coin theme={userChoice} />
        </Choice>
        <ChoicePlayer>You picked</ChoicePlayer>
      </ChoiceHolder>
      {result && (
        <ResultHolder style={{ gridArea: 'result' }}>
          <Result result={result} />
        </ResultHolder>
      )}
      <ChoiceHolder style={{ gridArea: 'house' }}>
        <Choice win={result === 'lose'}>
          {houseChoice && <Coin theme={houseChoice} />}
        </Choice>
        <ChoicePlayer>The house picked</ChoicePlayer>
      </ChoiceHolder>
    </Wrapper>
  );
};

export default Game;
