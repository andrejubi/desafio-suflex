import styled from "styled-components";

export const Content = styled.main`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  background: #000d82;
  color: #0050ff;
  display: grid;
  margin: 20px 0 36px;
  padding: 15px;
  gap: 20px;
  .content div {
    justify-content: initial;
  }
  .content h3 {
    margin-top: 0;
  }
`;
