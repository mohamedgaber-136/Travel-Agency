import React, { useContext, useState } from "react";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./BookingDetails.css";
import { Helmet } from "react-helmet";
import { HotelCard } from "./HotelCard";
import { PriceCard } from "./PriceCard";
import { searchContext } from "../../store/searchStore";
import { BookingBreacrumb } from "./BookingBreacrumb";
import AddCardModal from "../../Components/addCardModal/addCardModal";
import { CardsLists } from "./CardsLists";
const BookingDetails = () => {
  const { currentUserObj } = useContext(searchContext);
  const [cardsLists, setCardsLists] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  // handle close modal
  const handleClose = () => setModalShow(false);
  const handleShow = () => {
    if (currentUserObj.cards?.length != 0) {
      setCardsLists(true);
      setModalShow(true);
    } else {
      setCardsLists(false);
      setModalShow(true);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Booking-Details</title>
      </Helmet>
      <div className="container BookinDetailParent ">
        <BookingBreacrumb />
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex  justify-content-center gap-2 flex-column flex-md-row align-items-start">
            <HotelCard handleShow={handleShow} />
            <PriceCard />
          </div>
        </div>
        {cardsLists? (
          <CardsLists
            show={modalShow}
            setModalShow={setModalShow}
          />
        ) : (
          <AddCardModal
            show={modalShow}
            handleClose={setModalShow}
          />
        )}
      </div>
    </>
  );
};

export default BookingDetails;
