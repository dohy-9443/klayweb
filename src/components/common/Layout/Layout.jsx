import React from "react";
import * as S from "./style";

// component
import { Header, Footer } from "../../../components";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Blur>
        <Header />
        {children}
        <Footer />
      </S.Blur>
    </S.Container>
  );
};

export default Layout;
