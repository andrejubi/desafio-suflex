import styled from "styled-components";

export const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    border: 1px solid #312f35;
    background: #762cdf;
    cursor: pointer;
    color: #dcd7e2;
    padding: 10px 25px;
    border-radius: 2px;
    line-height: 20px;
    font-size: 15px;
  }
  button:hover {
    box-shadow: 0 4px 8px 0 #482182;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;
