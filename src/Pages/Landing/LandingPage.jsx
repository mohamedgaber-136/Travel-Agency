import React, { useContext, useEffect, useRef } from "react";
import { Main } from "../../Components/Main/Main";
import { Header } from "../../Components/Header/Header";
import { MainBookFlight } from "../../Components/MainBookFlight.jsx/MainBookFlight";
import { BookedTicket } from "../../Components/BookedTicket/BookedTicket";
import { Helmet } from "react-helmet";
import { searchContext } from "../../store/searchStore";
const LandingPage = () => {
  let { authorized, scrollToTopPage } = useContext(searchContext);
  console.log(authorized, "autho");
  const topRef = useRef();

  useEffect(() => {
    scrollToTopPage(topRef);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TravelTales</title>
      </Helmet>
      <div ref={topRef} />
      <Header />
      <Main />
      <MainBookFlight />
      <BookedTicket />
    </>
  );
};

export default LandingPage;
