import React from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Main />
      <MainBookFlight/>
    </>
  );
};

export default LandingPage;
