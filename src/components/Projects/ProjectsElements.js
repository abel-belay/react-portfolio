import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  position: relative;
  top: -4.875rem;
`;

export const ContentWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
