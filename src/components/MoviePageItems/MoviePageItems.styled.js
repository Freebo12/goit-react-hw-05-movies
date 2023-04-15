import styled from '@emotion/styled';

export const MovieList = styled.ul`
  list-style-position: inside;
  column-count: 2;
  list-style-type: decimal;
  height: 200px;
  padding-left: 120px;
`;

export const MovieListItem = styled.li`
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

export const BtnSearch = styled.button`
  text-align: center;

  margin-right: 40px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  background: rgb(255, 151, 0);
  border: none;
  z-index: 1;
  :hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }

  :after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #ff8c00;
    background: linear-gradient(0deg, #ffb703, #ffb703, #fb5607);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5) 7px 7px 20px 0px
        rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :hover {
    color: #000;
  }
  :hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  :active {
    top: 2px;
  }
`;

export const InputStyled = styled.input`
  width: 20%;
  height: 38px;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.4rem;
  color: black;
  padding: 2px 0;
  background: transparent;
  transition: border-color 0.2s;
  */ ::placeholder {
    color: transparent;
  }

  :focus {
    transition: 0.2s;
    font-size: 1rem;

    font-weight: 600;
    border-bottom: 2px solid orange;
  }
  margin-right: 10px;
`;
