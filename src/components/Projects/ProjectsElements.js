import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  padding-bottom: 4rem;
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

export const Button = styled.a`
  width: 10.13rem;
  height: 2.75rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #38CE8E;
  border: 2px solid #0B4129;
  border-radius: 1.375rem;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;

  &:hover {
    cursor: not-allowed;
  }
`;
