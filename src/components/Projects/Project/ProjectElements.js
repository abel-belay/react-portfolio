import styled from "styled-components";

export const Card = styled.div`
  width: 43%;
  min-width: 400px;
  aspect-ratio: 1/1.07;
  margin-bottom: 4.875rem;
  position: relative;
  background-color: white;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 0px 0.15rem #0b4129;
  overflow-x: hidden;
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
    background: rgba(153, 230, 197, 0.16);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 88.4%;
  min-height: 2rem;
  position: absolute;
  top: 69%;
  left: 50%;
  margin-top: 1.3rem;
  transform: translateX(-50%);
  color: #0b4129;
  font-family: "Source Sans Pro", sans-serif;

  & > h3 {
    font-size: 1.88rem;
    font-weight: bold;
  }

  & > p {
    margin-top: 1.2rem;
    font-size: 0.87rem;
    font-weight: bold;
    line-height: 1.2rem;
  }
`;
