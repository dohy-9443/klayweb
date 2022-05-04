import React from "react";

import * as S from "./style";

import { ConnectModal } from "../../../components";

const ConnectContainer = () => {
  const [isModalToggle, setIsModalToggle] = React.useState(true);

  return (
    <S.Container>
      <ConnectModal
        closeModal={() => setIsModalToggle(false)}
        onModal={isModalToggle}
      />
      <S.Wrap>
        <S.Inner>
          <div>
            <S.Text>connect your kaikas wallet.</S.Text>
            <S.Btn>
              <S.DIV>
                <span>Connect</span>
              </S.DIV>
            </S.Btn>
          </div>
        </S.Inner>
      </S.Wrap>
    </S.Container>
  );
};

export default ConnectContainer;
