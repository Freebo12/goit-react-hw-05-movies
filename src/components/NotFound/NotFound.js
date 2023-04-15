import styled from 'styled-components';

const PageNotFoundTitle = styled.h1`
  color: orange;
  font-weight: 900;
`;

export const NotFound = () => {
  return <PageNotFoundTitle>Page Not Found</PageNotFoundTitle>;
};
