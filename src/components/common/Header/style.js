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

  &:nth-last-of-type(1) {
    margin-right: 0;
  }

  &:nth-of-type(1) {
    margin-right: 140px;
  }

  &:nth-child(2) span {
    color: var(--main);
  }
  &:nth-child(3) span {
    color: var(--white);
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
  color: var(--gray);
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
