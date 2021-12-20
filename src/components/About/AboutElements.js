import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 50rem;
  background-color: white;
`;

export const TopRule = styled.hr`
  position: relative;
  top: 1.2vh;
  border: none;
  border-top: 0.5vh solid #0b4129;
`;

export const ContentWrapper = styled.div`
  width: 85vw;
  max-width: 1200px;
  margin: 8rem auto 0 auto;
  padding-bottom: 8rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
`;

export const Header = styled.div`
  display: inline;
  border-bottom: 1.38rem #99e6c5 solid;

  & > h2 {
    position: relative;
    top: 0.5rem;
    display: inline;

    margin-right: 2.5rem;
    color: white;
    font-size: 3.44rem;
    text-transform: uppercase;

    /* CREATES TEXT STROKE */
    --stroke-color: black;
    --stroke-width: 0.13rem;
    text-shadow: calc(var(--stroke-width) * 1) calc(var(--stroke-width) * 0) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.9239) calc(var(--stroke-width) * 0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.7071) calc(var(--stroke-width) * 0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.3827) calc(var(--stroke-width) * 0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0) calc(var(--stroke-width) * 1) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.3827) calc(var(--stroke-width) * 0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.7071) calc(var(--stroke-width) * 0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.9239) calc(var(--stroke-width) * 0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -1) calc(var(--stroke-width) * 0) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.9239) calc(var(--stroke-width) * -0.3827) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.7071) calc(var(--stroke-width) * -0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * -0.3827) calc(var(--stroke-width) * -0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0) calc(var(--stroke-width) * -1) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.3827) calc(var(--stroke-width) * -0.9239) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.7071) calc(var(--stroke-width) * -0.7071) 0
        var(--stroke-color),
      calc(var(--stroke-width) * 0.9239) calc(var(--stroke-width) * -0.3827) 0
        var(--stroke-color);
  }
`;

export const Description = styled.p`
  width: 58%;
  margin-top: 3.5rem;
  color: #0b4129;
  font-size: 1.2rem;
  line-height: 1.8em;
`;
