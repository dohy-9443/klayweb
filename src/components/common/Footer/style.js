import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 481px;
  border-top: 1px solid #c4c4c4;
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 86px;
  height: 59px;
  margin-bottom: 29px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: var(--gray);
`;
