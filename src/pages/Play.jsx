import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { choices } from '../utils/constants';
import bgTriangle from '../assets/bg-triangle.svg';

import Coin from '../components/Coin';

const Wrapper = styled.div`
  max-width: 320px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  background: url(${bgTriangle}) no-repeat center / 200px;
  button:last-child {
    margin: auto;
  }
  @media (min-width: 769px) {
    max-width: 480px;
    background: url(${bgTriangle}) no-repeat center 63%;
  }
`;

const Play = ({ onChoice }) => {
  let navigate = useNavigate();

  const setChoice = (e) => {
    onChoice(e.target.value);
    navigate('/game');
  };

  return (
    <Wrapper>
      {choices.map((choice) => (
        <button type="button" onClick={setChoice} value={choice} key={choice}>
          <Coin theme={choice} />
        </button>
      ))}
    </Wrapper>
  );
};

export default Play;
