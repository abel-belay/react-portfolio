import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  margin-left: 48%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0%;
  transform: translateY(50%);
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

export const Badge = styled.div`
  width: 8vw;
  min-width: 3rem;
  height: 8vw;
  min-height: 3rem;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #99e6c5;
  border-radius: 50%;

  &:last-child {
    margin-right: 0;
  }

  & > img {
    max-width: 65%;
    max-height: 65%;
  }

  @media (min-width: 850px) {
    width: 5vw;
    height: 5vw;
  }
`;
