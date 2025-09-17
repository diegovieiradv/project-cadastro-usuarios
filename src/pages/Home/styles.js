import styled from "styled-components";

export const Container = styled.div`
  background-color: #e9e3df;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 38px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 10px;
  border: solid 1px #d2dae2;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;

export const InputLabel = styled.label`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  span {
    color: red;
    font-weight: 700;
  }
`;
