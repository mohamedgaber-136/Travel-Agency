import React, { useContext } from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";
import { Helmet } from "react-helmet";
import { searchContext } from "../../store/searchStore";
const LandingPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TravelTales</title>
      </Helmet>
      <Header />
      <Main />
      <MainBookFlight />
    </>
  );
};

export default LandingPage;
