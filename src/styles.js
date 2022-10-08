import styled from "styled-components";

export const buttonsMap = {
  primary: {
    color: "#fff",
    backgroundcolor: "palevioletred",
  },
  secondary: {
    color: "palevioletred",
    backgroundcolor: "#fff",
  },
};

export const Button = styled.button`
  font-size: 16px;
  background: ${(props) => props.backgroundcolor};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => props.color};
  margin: 8px 16px;
  padding: 6px 16px;
`;

export const Title = styled.h2`
  font-size: 38px;
  font-family: monospace;
  color: hotpink;
`;
