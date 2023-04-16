import styled from '@emotion/styled';

export const NavBtn = styled.button`
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

export const Header = styled.header`
  text-align: justify;
  letter-spacing: 1px;
  height: 5em;
  padding: 2em 10%;
  background: linear-gradient(90deg, #121212, #333333, #525252);
  width: 100%;

  color: #fff;
  display: block;
  margin-bottom: 10px;
`;

export const Footer = styled.footer`
  text-align: justify;
  letter-spacing: 1px;
  height: 5em;
  padding: 2em 10%;
  background: linear-gradient(90deg, #121212, #333333, #525252);
  color: #fff;
  display: block;
  padding: 1em;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #333;
  color: white;
`;
