import React from "react";
import * as S from "./style";

// component
import { Header, Footer } from "../../../components";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Blur>
        <S.DIV>
          <Header />
          {children}
          <Footer />
        </S.DIV>
      </S.Blur>
    </S.Container>
  );
};

export default Layout;
