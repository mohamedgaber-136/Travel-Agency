import React from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";
import { BookedTicket } from "../../Components/BookedTicket/BookedTicket";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Main />
      <BookedTicket/>
      <MainBookFlight/>
    </>
  );
};

export default LandingPage;
