import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalImgs(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Body className="rounded-2">
        <div className=" d-flex justify-content-center gap-2 align-items-center flex-wrap">
          {props.imgsCovres.map((cover) => (
            <div className="coverBoxParent d-flex justify-content-center align-items-center">
              <img
                className="coverBox"
                onClick={() => props.addCover(cover)}
                src={cover}
              />
            </div>
          ))}
        </div>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}
export default ModalImgs;
