import React from "react";
import GlobalStyle from "./utils/GlobalStyle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import * as Pages from "./pages";

// 페이지 이동시 최상단으로 이동
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <>
        <Routes>
          <Route path="/" element={<Pages.MainPage />} />
          <Route path="/connect" element={<Pages.ConnectPage />} />
        </Routes>
      </>
    </>
  );
}
