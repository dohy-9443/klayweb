import React from "react";

import * as S from "./style";

const Box = ({ percent }) => {
  return (
    <S.Border percent={percent * 0.01}>
      ssssssssssssssss
      <S.DIV>{percent}%</S.DIV>
    </S.Border>
  );
};
//  <Box percent={100} /> 이렇게 쓰면 됌
export default Box;
