import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";

import { MiningBox } from "../..";
import { miningData } from "../../../mock/miningDummy";
const NotMiningWrap = () => {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setList(miningData);

    return () => {
      setList([]);
    };
  }, []);

  useEffect(() => {
    let result = list.filter((item) => item.isActive);

    setTotal(result.length);
  }, [list]);

  return (
    <S.Container>
      <S.Top>
        <S.H2>Not mining</S.H2>
        <S.Icon>
          <img src="/assets/img/bigLion.png" alt="" />
        </S.Icon>
        <S.Span>refresh</S.Span>
      </S.Top>
      <S.Ul>
        {list.map((item, index) => (
          <S.Li key={item.id}>
            <MiningBox list={list} setList={setList} idx={index} />
          </S.Li>
        ))}
      </S.Ul>
      <S.Bottom>
        <S.Left>
          Selected <span>{total}</span>
        </S.Left>
        <S.Right>
          <span>MINING</span>
        </S.Right>
      </S.Bottom>
    </S.Container>
  );
};

export default NotMiningWrap;
