import React, { useContext } from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";
import { BookedTicket } from "../../Components/BookedTicket/BookedTicket";
import { Helmet } from "react-helmet";
import { searchContext } from "../../store/searchStore";
const LandingPage = () => {
  let{ authorized  } = useContext(searchContext)
  console.log(authorized,'autho')
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TravelTales</title>
      </Helmet>
      <Header />
      <Main />
      <BookedTicket />
      <MainBookFlight />
    </>
  );
};

export default LandingPage;
