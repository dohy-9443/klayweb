import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(185.89deg, #000000 0.29%, #111111 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 580px;
    height: 580px;
    border-radius: 50%;
    background: linear-gradient(
      135.97deg,
      #98fff3 14.52%,
      #0057ff 50.35%,
      #bd00ff 87.24%
    );
    left: -270px;
    bottom: 332px;
    opacity: 0.6;
    z-index: 1;
    filter: blur(340px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 310px;
    height: 310px;
    border-radius: 50%;
    background: linear-gradient(
      135.97deg,
      #98ffa9 14.52%,
      #00ffb2 50.35%,
      #00e0ff 87.24%
    );
    right: -65px;
    bottom: -159px;
    opacity: 0.3;
    z-index: 1;
    filter: blur(340px);
  }
`;

export const Blur = styled.div`
  position: relative;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.05); */
  background: linear-gradient(
    rgba(8 8 8 / 0%) 15%,
    rgba(255, 255, 255, 0.05) 23%
  );
  backdrop-filter: blur(340px);
  z-index: 2;
`;

export const DIV = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  max-width: 1920px;
  margin: 0 auto;
`;
