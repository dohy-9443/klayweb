//react
import React from "react";
import * as S from "./style";

//css
import styled from "styled-components";
import { BackBtn } from "../../../components";
export default function Header() {
  return (
    <>
      <S.Container>
        <BackBtn />
        <div>헤더</div>
        <div>=</div>
      </S.Container>
    </>
  );
}
