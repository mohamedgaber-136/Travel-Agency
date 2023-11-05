import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PaymentCard } from "../../Components/accountFlow/AccountPayment/PaymentCard";
import { searchContext } from "../../store/searchStore";
import { AddNewCard } from "../../Components/accountFlow/AccountPayment/AddNewCard";
import AddCardModal from "../../Components/addCardModal/addCardModal";
import SubmitCard from "./SubmitCard";
export const CardsLists = ({ show, setModalShow }) => {
  const { currentUserObj } = useContext(searchContext);
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Cards </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3">
          <AddNewCard
            setModalShow={() => {
              setShowAddCard(true);
              setModalShow(false);
            }}
          />

          <div className="row flex-wrap justify-content-center align-items-center">
            {currentUserObj.cards.map((item, index) => (
              <PaymentCard key={index} item={item} index={index} />
            ))}
          </div>
        </Modal.Body>
      </Modal>
      <AddCardModal
        show={showAddCard}
        handleClose={() => {
          setModalShow(true);
          setShowAddCard(false);
        }}
      />
    </>
  );
};
