import styled from "styled-components";

export const ContentWrapper = styled.section`
  width: 100vw;
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-aspect-ratio: 9/14) {
    height: 80vh;
  }
`;

export const GraphicsWrapper = styled.div`
  width: 90%;
  max-height: 80vh;
  max-width: calc(80vh * (1300 / 1320));
  aspect-ratio: 1300/1320;
  position: relative;
  bottom: -1.5rem;
  z-index: 2;

  & > .circle-text {
    width: 95%;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    animation: rotate 20s linear infinite;
    @keyframes rotate {
      from {
        transform: translate(-50%) rotate(0deg);
      }
      to {
        transform: translate(-50%) rotate(360deg);
      }
    }
  }

  & > .avatar {
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
