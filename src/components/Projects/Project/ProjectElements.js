import styled from "styled-components";

export const Card = styled.div`
  width: 43.4%;
  min-width: 300px;
  aspect-ratio: 1/1.07;
  background-color: white;
  border: solid #0b4129 0.15rem;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 69%;
  position: relative;

  &::after {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background: rgba(153, 230, 197, 0.15);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
