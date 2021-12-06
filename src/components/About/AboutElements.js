import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 85vw;
  margin: 8rem auto 0 auto;
`;

export const Header = styled.div`
  display: inline;
  border-bottom: 1.38rem #99E6C5 solid;

  & > h2 {
    position: relative;
    top: 0.5rem;
    display: inline;

    margin-right: 2.5rem;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3.44rem;
    font-weight: bold;
    text-transform: uppercase;

    --stroke-color: black;
    --stroke-width: 2px;
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
