import React from "react";

import * as S from "./style";

import { NotMiningWrap, MiningWrap, ConnectModal } from "../../../components";

const MiningContainer = () => {
  const [isModalToggle, setIsModalToggle] = React.useState(true);
  return (
    <S.Container>
      <ConnectModal
        closeModal={() => setIsModalToggle(false)}
        onModal={isModalToggle}
      />
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
