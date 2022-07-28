import styled from "styled-components";

export const FormStyled = styled.div`
  form {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    border: 1px solid #762cdf;
    border-radius: 2px;
    padding: 2rem;
    margin: 1rem;
    width: 50vw;
    div:not(:last-child) {
      margin-right: 0.75rem;
      padding-bottom: 2rem;
      width: 85%;
    }
    input {
      border: 1px solid #762cdf;
      padding: 0.5rem 0.25rem;
      border-radius: 20px;
    }
  }
`;
