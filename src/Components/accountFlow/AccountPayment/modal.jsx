import { Button, Modal } from "react-bootstrap";

export default function PaymentModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title className="p-4 fs-2">Add a new Card</Modal.Title>

      <Modal.Body className="p-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia, odit dolores, ut error repellat autem unde, quasi consectetur reprehenderit eos voluptates! Sit cupiditate magni et animi ducimus soluta voluptas?</p>
       </Modal.Body>
      
    </Modal>
  );
}
