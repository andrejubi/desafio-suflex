import styled from "styled-components";

export const NavbarFilterStyled = styled.nav`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  border: 1px solid #000d82;
  border-radius: 5px;
  height: 100%;
  margin: 1rem;
  .filter-by-search {
    border-right: 1px solid #000d82;
    height: 100%;
    padding: 1px;
    width: 30%;
    input {
      padding: 0.5rem;
    }
    @media only screen and (max-width: 600px) {
      input {
        width: 82.5% !important;
      }
    }
  }

  .filter-by-categories {
    width: 75%;
    padding-right: 0.5rem;
  }
`;
