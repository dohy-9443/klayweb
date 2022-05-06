import React from "react";

import * as S from "./style";

import { NotMiningWrap, MiningWrap } from "../../../components";

const MiningContainer = () => {
  return (
    <S.Container>
      <S.Wrap>
        <S.Inner>
          <S.DIV>
            <NotMiningWrap />
          </S.DIV>
        </S.Inner>
        <S.Inner>
          <S.DIV>
            <MiningWrap />
          </S.DIV>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default MiningContainer;
