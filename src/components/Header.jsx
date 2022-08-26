import styled from 'styled-components';
import Score from './Score';

const Wrapper = styled.header`
  width: 100%;
  max-width: 480px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid var(--header-outline);
  padding: 1em 1.5em 1em 2em;
  border-radius: 1em;
  @media (min-width: 769px) {
    max-width: 700px;
    margin-bottom: 4em;
  }
`;

const Title = styled.h1`
  display: grid;
  text-transform: uppercase;
  line-height: 0.8;
  @media (min-width: 769px) {
    font-size: 2.5em;
    margin-bottom: 2px;
  }
`;

const Header = ({ score }) => {
  return (
    <Wrapper>
      <Title>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </Title>
      <Score score={score} />
    </Wrapper>
  );
};

export default Header;
