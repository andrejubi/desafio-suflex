import styled from "styled-components";

export const CardStyled = styled.div`
  border: 1px solid #762cdf;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  box-shadow: 0 2px 4px 0 #2d1651;
  border-radius: 2px;
  transition: 0.25s;
  &:hover {
    box-shadow: 0 4px 8px 0 #2d1651;
  }
  .image-content {
    cursor: pointer;
    display: flex;
    height: 200px;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .footer-content {
    justify-content: space-between;
    align-items: center;
    display: flex;
    background: #762cdf;
    padding: 0.5rem;
    width: 100%;
    span {
      text-transform: uppercase;
      font-style: italic;
      cursor: pointer;
      color: #665f70;
      padding-left: 1rem;
      font-size: 10px;
    }
    .star {
      cursor: pointer;
      color: #665f70;
      padding-right: 1rem;
      font-size: 20px;
    }
    .checkedStar {
      color: #dd2c2c;
    }
  }
`;
