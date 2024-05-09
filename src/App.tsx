import React, { FunctionComponent, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const App: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="App">
        <Header />
        {/* <div className="mt-0 sm:mt-[132px]"> */}
          <Outlet />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
