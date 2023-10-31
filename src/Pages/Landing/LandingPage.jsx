import React from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";
import { BookedTicket } from "../../Components/BookedTicket/BookedTicket";
import { Helmet } from "react-helmet";
const LandingPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>LogoForTravel</title>
      </Helmet>
      <Header />
      <Main />
      <BookedTicket />
      <MainBookFlight />
    </>
  );
};

export default LandingPage;
