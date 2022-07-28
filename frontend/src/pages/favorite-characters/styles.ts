import styled from "styled-components";

export const Content = styled.main`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  display: grid;
  padding: 15px;
  gap: 20px;
`;

export const MoreItems = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 15px;
  margin: 15px;
  width: 100%;
  button {
    width: 25%;
  }
`;
