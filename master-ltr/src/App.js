import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import HomeOne from "./pages/HomeOne";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <RouteScrollToTop /> */}
        {/* <ScrollToTop smooth color="#E8092E" /> */}
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/home-1" element={<HomeOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
