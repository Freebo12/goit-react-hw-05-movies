import styled from '@emotion/styled';

export const TrendList = styled.ul`
  list-style-position: inside;
  column-count: 2;
  list-style-type: decimal;
  height: 200px;
  padding-left: 120px;
`;

export const TrendListItem = styled.li`
  border-radius: 4px;
  width: 400px;
  position: relative;
  display: block;
  margin-bottom: 0.25rem;
  padding: 0.325rem 0.825rem 0.325rem 1.325rem;
  color: #fff;
  background: #ff8c00;
  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.5rem;
    background: black;
  }
`;
