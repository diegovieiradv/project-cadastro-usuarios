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

export const TopBackground = styled.div``;

export const Title = styled.h1`
  font-size: 38px;
  padding-bottom: 20px;
  margin-top: 20px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 30px 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUsers = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 16px;
  justify-content: space-between;
  border-radius: 32px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 380px;

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  p {
    font-size: 15px;
    margin: 4px 0;
    font-weight: 300;
  }
`;

export const AvatarUser = styled.img`
  width: 90px;
  height: 90px;
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 40px;

  &:hover {
    transform: scale(1.1);
  }

  transition: all 0.2s;

  &:active {
    opacity: 0.5;
  }
`;

export const DeleteUsers = styled.button``;
