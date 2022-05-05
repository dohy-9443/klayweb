import styled from "styled-components";

import { connect } from "../../../utils/ShareStyle";

export const Container = styled.header`
  width: 100%;
  height: 110px;
`;

export const Wrap = styled.div`
  padding: 0 140px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 100px;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &:nth-of-type(1) {
    margin-right: 140px;
  }
`;

export const Img = styled.div`
  width: 68px;
  height: 46px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Span = styled.span`
  display: block;
  font-weight: 500;
  font-size: 16px;

  ${({ active, disabled }) => {
    if (active) {
      return `color: var(--main);`;
    } else if (disabled) {
      return `color: var(--gray);`;
    } else if (!disabled && !active) {
      return `color: var(--white);`;
    }
  }}
`;

export const SubLi = styled.li`
  margin-right: 100px;
  cursor: pointer;

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &:nth-of-type(1) {
    margin-right: 140px;
  }
`;

export const Right = styled.div`
  ${connect}
  width: 175px;
  height: 49px;
`;

export const Btn = styled.div`
  width: 173px;
  height: 47px;
`;

export const WalletId = styled.h2`
  font-weight: 700;
  font-size: 16px;
  background: linear-gradient(
    90.48deg,
    #86ffca 0.24%,
    #45ca8a 52.29%,
    #03b68b 99.58%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
