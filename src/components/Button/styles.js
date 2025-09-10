import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(to right, #FF7A30, #465C88);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  width: fit-content;
  padding: 16px 32px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #465C88, #f9cb99);
  }
`;
