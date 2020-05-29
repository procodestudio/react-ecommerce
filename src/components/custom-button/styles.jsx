import styled, { css } from 'styled-components';

const defaultThemeStyles = css`
  background-color: black;
  color: white;
  border: none;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedThemeStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    color: white;
    background-color: black;
    border: none;
  }
`;

const blueThemeStyles = css`
  background-color: #4285f4;
  color: white;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const themes = {
  inverted: invertedThemeStyles,
  blue: blueThemeStyles,
  default: defaultThemeStyles,
};

const getThemeStyles = ({ theme }) => themes[theme] || themes.default;

const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getThemeStyles}
`;

export default CustomButtonContainer;
