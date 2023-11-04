import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { PaymentCard } from "../../Components/accountFlow/AccountPayment/PaymentCard";
import { searchContext } from "../../store/searchStore";
import { AddNewCard } from "../../Components/accountFlow/AccountPayment/AddNewCard";
export const CardsLists = ({ show, setModalShow }) => {
  const { currentUserObj } = useContext(searchContext);
  return (
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
      <div className="row justify-content-center align-items-center  flex-wrap">
        <Modal.Body>
          <AddNewCard setModalShow={setModalShow} />
        </Modal.Body>
        {currentUserObj.cards.map((item, index) => (
          <Modal.Body key={index}>
            <PaymentCard item={item} index={index} />
          </Modal.Body>
        ))}
      </div>
    </Modal>
  );
};
