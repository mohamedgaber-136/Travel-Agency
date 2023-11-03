import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./BookingDetails.css";
import download1 from "../../assets/images/accountFlow/download1.png";
import location from "../../assets/images/accountFlow/Location.svg";
import building from "../../assets/images/accountFlow/building.svg";
import right from "../../assets/images/accountFlow/right.svg";
import left from "../../assets/images/accountFlow/left.svg";
import frame from "../../assets/images/accountFlow/Frame 186.png";
// import { FloatingLabel, InputGroup } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { countries } from "../../data/country";
import { Visa } from "../../assets/images";
import { bookingSchema } from "./bookingValidation";
import { searchContext } from "../../store/searchStore";
// import * as yup from "yup";

const BookingDetails = () => {
  // handle close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUserObj, setCurrentUserObj, updateCurrentUser } =
    useContext(searchContext);
  const [isValidData, setIsValidData] = useState(false);

  const [show, setShow] = useState(false);
  // const [val, setVal] = useState("");
  const [formData, setFormData] = useState({
    // validation schema
    creditCard: "",
    cvc: "",
    expireDate: "",
    username: "",
    country: "",
    license: "",
  });

  // handle credi card input
  function cc_format(value) {
    // function cc_format() {
    // const v = formData.creditCard
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .slice(0, 16);
    // .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      // if (i !== v.length - 1) {
      console.log(v.substr(i, 4), "subpart");
      console.log(parts, "parts");
      // parts.push(v.slice(i, 4));
      parts.push(v.substr(i, 4));
      // }
    }

    // return parts.length > 1 ? parts.join(" ") : formData.creditCard;
    return parts.length > 1 ? parts.join(" ") : value;
    // return parts.length > 1 ?parts.replace() : value;
  }

  // form validation
  const bookingValidation = async (e) => {
    e.preventDefault();
    console.log(formData, "rrrrrr");

    // const isValid = await bookingSchema.isValid(formData);
    setIsValidData(await bookingSchema.isValid(formData));
    console.log(isValidData);

    if (isValidData) {
      handleClose();

      console.log(currentUserObj, "adduser");
      updateCurrentUser({
        cards: formData,
      });

      setFormData({
        creditCard: "",
        cvc: "",
        expireDate: "",
        username: "",
        country: "",
        license: "",
      });
      // setCurrentUserObj({
      //   ...currentUserObj,
      //   cards: formData,
      // });
    }
  };

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
                className="btn btn-primary book-btn mt-4 p-2"
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
            <form className="d-flex flex-column " onSubmit={bookingValidation}>
              <div className="col">
                <div className="coolinput w-100">
                  <div className="inputVisa w-100 coolinput">
                    {/* credit card input  */}
                    <label
                      for="card-number"
                      className="text fw-normal labelText "
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="rounded-2 placeStyle  form-control"
                      placeholder="4321 4321 4321 4321"
                      maxLength={19}
                      // value={cc_format(val)}
                      value={cc_format(formData.creditCard)}
                      // defaultValue={cardNum}
                      // pattern="[0-9 ]+"
                      onChange={(e) => {
                        // setVal(e.target.value);
                        const str = e.target.value.replace(/\s/g, "");

                        if (!isNaN(str)) {
                          setFormData({
                            ...formData,
                            creditCard: str,
                          });
                        }
                      }}
                      required
                    />
                    <img src={Visa} alt="" className="visaDetails" />
                  </div>
                  {/* expiration date input  */}
                  <div className="mb-3 d-flex  gap-5 w-100 justify-content-center">
                    <div className="w-100">
                      <label className=" text fw-normal labelText">
                        Exp. Date
                      </label>
                      <br />
                      <input
                        className="me-2 w-100 placeStyle rounded-2  form-control"
                        placeholder="02/27"
                        type="date"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            expireDate: e.target.value,
                          });
                        }}
                        // aria-label="Exp. Date"
                        required
                      />
                    </div>
                    {/* cvc input  */}
                    <div>
                      <label className=" text fw-normal  labelText">CVC</label>
                      <input
                        // aria-label="CVC"
                        type="number"
                        className="me-2 w-100 placeStyle  rounded-2  form-control"
                        placeholder="456"
                        value={formData.cvc}
                        onChange={(e) => {
                          if (e.target.value.length <= 3) {
                            setFormData({ ...formData, cvc: e.target.value });
                          }
                        }}
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  {/* username input  */}
                  <label className="text fw-normal labelText">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="name placeStyle rounded-2 form-control w-100"
                    placeholder="Jon Doe"
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                    }}
                    required
                  />
                  {/* selection countries input */}
                  <div class="input-group d-flex">
                    <div className="col">
                      <label className="text fw-normal  labelText">
                        Country Or Region
                      </label>
                      <select
                        className="form-select rounded-2  form-control"
                        id="inputGroupSelect04"
                        onChange={(e) => {
                          setFormData({ ...formData, country: e.target.value });
                          // console.log(e.target.value, "eeeee");
                        }}
                        aria-label="Example select with button addon"
                      >
                        <option value="Choose a country" selected>
                          Choose a country
                        </option>
                        {countries.map((x) => (
                          <option value={x.name} key={x.id}>
                            {x.name}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* check box and button submit  */}
              <Modal.Footer>
                <div className="text">
                  <div class="form-check">
                    <input
                      class="form-check-input input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          license: e.target.checked,
                        });
                      }}
                      required
                    />
                    <label
                      className="text fs-5 form-check-label  "
                      htmlFor="invalidCheck"
                      required
                    >
                      Securely save my information for 1-click checkout
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={bookingValidation}
                    className="w-100 text my-2 book-btn py-2 rounded-3"
                  >
                    Add Card
                  </button>
                  <p className="text fw-light fs-5 m-auto">
                    By confirming your subscription, you allow The Outdoor Inn
                    Crowd Limited to charge your card for this payment and
                    future payments in accordance with their terms. You can
                    always cancel your subscription.
                  </p>
                </div>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BookingDetails;
