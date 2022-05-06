import React from "react";

import * as S from "./style";

const Box = ({ list, setList, idx }) => {
  // const [isActive, setIsActive] = React.useState(false);

  return (
    <S.Container
      active={list[idx].isActive}
      onClick={() => {
        let copy = [...list];
        copy[idx].isActive = !copy[idx].isActive;
        setList(copy);
      }}
    ></S.Container>
  );
};

export default Box;
