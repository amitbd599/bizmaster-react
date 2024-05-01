import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import IndexPage from "./pages/IndexPage";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" />
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/home-1" element={<HomeOne />} />
          <Route exact path="/home-2" element={<HomeTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
