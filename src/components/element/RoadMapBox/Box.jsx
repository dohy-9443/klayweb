import React from "react";

import * as S from "./style";

const Box = ({ percent, text, check }) => {
  return (
    <S.Border percent={percent * 0.01}>
      <S.PerText percent={percent * 0.01} check={check}>
        {check ? (
          <S.ImgBox>
            <img src="/assets/img/icon/ch.svg" alt="" />
          </S.ImgBox>
        ) : (
          percent + "%"
        )}
      </S.PerText>
      <S.DIV>{text}</S.DIV>
    </S.Border>
  );
};
//  <Box percent={100} /> 이렇게 쓰면 됌
export default Box;
