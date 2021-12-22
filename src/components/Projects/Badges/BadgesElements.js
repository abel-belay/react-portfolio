import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 8.4%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
`;

export const Badge = styled.div`
  width: calc(12% + 8px);
  aspect-ratio: 1/1;
  margin-right: 0.875rem;
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
`;
