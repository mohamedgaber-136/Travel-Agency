import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./BookingDetails.css";
import download1 from "../../assets/images/accountFlow/download1.png";
import location from "../../assets/images/accountFlow/Location.svg";
import building from "../../assets/images/accountFlow/building.svg";
import right from "../../assets/images/accountFlow/right.svg";
import left from "../../assets/images/accountFlow/left.svg";
import frame from "../../assets/images/accountFlow/Frame 186.png";
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BookingDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Booking-Details</title>
      </Helmet>
      <div className="container my-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Turkey</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Istanbul</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              CVK Park Bosphorus Hotel Istanbul
            </li>
          </ol>
        </nav>
        <div className="row align-items-start">
          <div className="col-md-7 d-flex">
            <div class="card p-4 mb-3">
              <div class="card-header d-flex justify-content-between align-items-center ">
                <h2 className="">
                  Superior room - 1 double bed or <span>2 twin beds </span>
                </h2>
                <h5 className="card-price">
                  $240<span className="align-content-end night">/night </span>
                </h5>
              </div>
              {/* second section  */}
              <div className=" d-flex body my-4 p-4">
                <img src={download1} className="body-img" alt="" srcset="" />
                <div className=" body-location">
                  <h5 className="card-text ms-2">
                    CVK Park Bosphorus Hotel Istanbul
                  </h5>
                  <div className="d-flex">
                    <img
                      src={location}
                      className="body-sub-img mx-2 mb-0"
                      alt=""
                      srcset=""
                    />
                    <p className="card-sub-text mb-0">
                      Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                    </p>
                  </div>
                </div>
              </div>
              {/* third section  */}
              <div className="container d-flex justify-content-between">
                {/* <div className="row"> */}
                <h4 className=" align-items-center">
                  Thursday, Dec 8 <br /> <span> Check-In</span>
                </h4>
                <div className="direc d-flex align-content-center align-items-center">
                  <img className="line" src={left} alt="" />
                  <img className="home-logo" src={building} alt="" />
                  <img className="line me-1" src={right} alt="" />
                </div>
                <h4 className=" mx-auto ">
                  Thursday, Dec 9 <br /> <span>Check-Out</span>
                </h4>
                {/* </div> */}
              </div>
              <Button
                variant="primary"
                className="btn btn-primary book-btn mt-4"
                onClick={handleShow}
              >
                Book Now
              </Button>
            </div>
          </div>
          {/* end of card  */}

          {/* side card */}
          <div className="col-md-5">
            <div class="card">
              <div class="card-header p-4 d-flex justify-content-between">
                <img src={frame} className="side-header-img me-3" alt="" />
                <div>
                  <h6 className="img-header">CVK Park Bosphorus...</h6>
                  <p className="side-head mb-0 fw-bold">
                    Superior room - 1 double bed or 2 twin beds
                  </p>
                  <div className="d-flex align-items-center">
                    <Button className="btn-cardds me-2">
                      <span className="btn-text"> 4.2</span>
                    </Button>
                    <p className="revieew mb-0">
                      <span className="very">Very Good </span>54 reviews
                    </p>
                  </div>
                </div>
              </div>
              <p className="p-4 m-0">
                Your booking is protected by{" "}
                <span className="fw-bold"> golobe </span>
              </p>
              <hr className="m-0" />
              <div class="card-body p-4">
                <h5 class="card-title">Price Details</h5>
                <div className="d-flex justify-content-between">
                  <div class="card-textt">
                    <p>Base Fare</p>
                    <p>Discount</p>
                    <p>Taxes</p>
                    <p>Service Fee</p>
                  </div>

                  <div className="card-pricee">
                    <p> $240</p>
                    <p> $0</p>
                    <p> $20</p>
                    <p>$5 </p>
                  </div>
                </div>
                <hr className="" />
                <div className="d-flex justify-content-between">
                  <p className="card-textt">Total </p>
                  <p className="card-pricee">$25</p>
                </div>
              </div>
            </div>
          </div>
          {/* end side card  */}
        </div>
        {/* Modal  */}
        <Modal show={show} className="fs-4 mt-4" onHide={handleClose}>
          <Modal.Title className="p-4 fs-2">Add a new Card</Modal.Title>

          <Modal.Body className="p-4">
            <form className="d-flex">
              <div className="col">
                <div className="coolinput ">
                  <label
                    for="card-number"
                    className="text fw-normal labelText "
                  >
                    Card Number
                  </label>
                  <input
                    type="number"
                    className="visa rounded-2 placeStyle"
                    placeholder="4321 4321 4321 4321"
                  />
                  <div className="mb-3 d-flex justify-content-between gap-3">
                    <div className="">
                      <label className=" text fw-normal labelText">
                        Exp. Date
                      </label>
                      <br />
                      <input
                        className="me-2 w-100 input placeStyle rounded-2"
                        placeholder="02/27"
                        // type="date"
                        // aria-label="Exp. Date"
                      />
                    </div>
                    <div>
                      <label className=" text fw-normal  labelText">CVC</label>
                      <input
                        // aria-label="CVC"
                        type="text"
                        className="me-2 w-100 placeStyle  rounded-2"
                        placeholder="456"
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <label className="text fw-normal labelText">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="name placeStyle rounded-2"
                    placeholder="Jon Doe"
                  />
                  <div class="input-group d-flex">
                    <div className="col">
                      <label className="text fw-normal  labelText">
                        Country Or Region
                      </label>
                      <select
                        className="form-select rounded-2 "
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                      >
                        <option>United States</option>
                        <option value="1">Turkey</option>
                        <option value="2">England</option>
                        <option value="3">Egypt</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className="text">
              <div class="form-check">
                <input
                  class="form-check-input input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label
                  className=" text form-check-label "
                  for="flexCheckIndeterminate"
                >
                  Securely save my information for 1-click checkout
                </label>
              </div>

              <Button
                onClick={handleClose}
                className="w-100 text my-2 book-btn "
              >
                Add Card
              </Button>
              <p className="text fw-light fs-0 m-auto">
                By confirming your subscription, you allow The Outdoor Inn Crowd
                Limited to charge your card for this payment and future payments
                in accordance with their terms. You can always cancel your
                subscription.
              </p>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default BookingDetails;
