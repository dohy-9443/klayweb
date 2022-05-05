import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
const SnsWrapper = () => {
  const navigate = useNavigate();

  return (
    <S.SnsUl>
      <S.SNS onClick={() => navigate(`https://twitter.com/KlayLionsNFT`)}>
        <img src="/assets/img/icon/Twitter.svg" alt="" />
      </S.SNS>
      <S.SNS onClick={() => navigate(`https://discord.com/invite/DEKyBYtjU5`)}>
        <img src="/assets/img/icon/discord.svg" alt="" />
      </S.SNS>
      <S.SNS
        onClick={() => navigate(`https://opensea.io/collection/klay-lions`)}
      >
        <img src="/assets/img/icon/opensea.svg" alt="" />
      </S.SNS>
      <S.SNS
        onClick={() => navigate(`https://lions-klay.gitbook.io/klay-lions`)}
      >
        <img src="/assets/img/icon/gitbook.svg" alt="" />
      </S.SNS>
    </S.SnsUl>
  );
};

export default SnsWrapper;
