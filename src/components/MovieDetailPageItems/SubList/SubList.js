import { NavLink } from 'react-router-dom';
import { BtnSub } from './SubLIst.styled';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: grey;
  width: 130px;
  height: 40px;
  font-weight: 400;
  &.active {
    color: black;
    font-weight: 700;
  }
`;

export const SubList = () => {
  return (
    <ul>
      <li>
        <BtnSub>
          <StyledLink to="Cast">Cast</StyledLink>
        </BtnSub>
      </li>
      <li>
        <BtnSub>
          <StyledLink to="Reviews">Review</StyledLink>
        </BtnSub>
      </li>
    </ul>
  );
};
