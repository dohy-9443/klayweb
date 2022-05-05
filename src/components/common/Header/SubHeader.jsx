//react
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";

const SubHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const Titles = [
    { id: 1, text: "STAKING", link: "", disabled: false },
    { id: 2, text: "MINING", link: "/mining", disabled: false },
    { id: 3, text: "LIONS BALL", link: "/lionsball", disabled: false },
    { id: 4, text: "VOTE", link: "", disabled: true },
    { id: 5, text: "MINIGAME", link: "", disabled: true },
  ];

  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.Inner>
            <S.Left>
              <S.Li onClick={() => navigate("/")}>
                <S.Img>
                  <img src="/assets/img/logo.png" alt="logo" />
                </S.Img>
              </S.Li>
              {Titles.map((item) => (
                <S.Li key={item.id} onClick={() => navigate(item.link)}>
                  <S.Span
                    active={pathname === item.link}
                    disabled={item.disabled}
                  >
                    {item.text}
                  </S.Span>
                </S.Li>
              ))}
            </S.Left>
            <S.WalletId>0xfbc···03a6</S.WalletId>
          </S.Inner>
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default SubHeader;
