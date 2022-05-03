import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  }
`;

export const Blur = styled.div`
  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(340px);
  z-index: 2;
`;
