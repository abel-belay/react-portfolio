import styled from "styled-components";

export const Card = styled.a`
  width: 38vw;
  max-width: 500px;
  height: 44vw;
  max-height: 540px;
  margin-bottom: 4.875rem;
  overflow: hidden;

  background-color: white;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 0px 0.15rem #0b4129;
  overflow-x: hidden;
  transition: 0.3s linear;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  }

  @media (max-width: 850px) {
    width: 80vw;
    max-width: 500px;
    height: 92.63vw;
    max-height: 540px;
  }
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

  @media (max-width: 400px) {
    height: 66%;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 88%;
  margin: 1em auto 0 auto;
  color: #0b4129;
  font-family: "Source Sans Pro", sans-serif;

  & > h3 {
    font-size: 1.8em;
    font-weight: bold;
  }

  & > p {
    margin-top: 0.8em;
    font-size: 1em;
    font-weight: normal;
    line-height: 1.2em;
  }

  @media (max-width: 400px) {
    margin-top: 0.6em;

    & > h3 {
      font-size: 1.7em;
    }

    & > p {
      margin-top: 0.6em;
    }
  }

  @media (min-width: 500px) {
    font-size: 16px;
  }

  @media (min-width: 850px) {
    font-size: 14px;
  }

  @media (min-width: 1100px) {
    font-size: 16px;
  }
`;
