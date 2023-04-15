import styled from '@emotion/styled';

export const FilmCardBox = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 50%;
`;

export const BtnBack = styled.button`
  position: absolute;
  top: 5%;
  left: 15%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
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

export const FilmTitle = styled.h2`
  color: rgb(255, 151, 0);
`;

export const SubTitle = styled.h3`
  color: rgb(255, 151, 0);
`;

export const Paragraph = styled.p`
  color: white;
`;

export const ListGenres = styled.ul`
  list-style-position: inside;
  column-count: 1;
  list-style-type: decimal;
  height: 200px;
  padding-left: 170px;
`;

export const ListGenresItem = styled.li`
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
    background: white;
  }
`;
