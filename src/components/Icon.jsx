import styled from 'styled-components';

import { icons } from '../utils/constants';

const Img = styled.img`
  width: 40%;
  pointer-events: none;
`;

const Icon = ({ theme }) => <Img src={icons[theme]} alt={`${theme} icon`} />;

export default Icon;
