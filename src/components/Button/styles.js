import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(to right, #FF7A30, #465C88)"
      : "transparent"};
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #0000004d"};
  border-radius: 30px;
  color: ${(props) => (props.theme === "primary" ? "#fff" : "#000000b6")};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  width: fit-content;
  padding: 16px 32px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #465c88, #f9cb99) transparent;
  }
  &:active {
    transform: ${(props) => props.theme === "primary" ? "scale(0.95)" : "scale(0.98)"};
  }
`;
