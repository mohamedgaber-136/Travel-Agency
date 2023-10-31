import React from "react";
import "./BookingDetails.css";
import download1 from "../../assets/images/accountFlow/download1.png";
import location from "../../assets/images/accountFlow/Location.svg";
import building from "../../assets/images/accountFlow/building.svg";
import right from "../../assets/images/accountFlow/right.svg";
import left from "../../assets/images/accountFlow/left.svg";
import frame from "../../assets/images/accountFlow/Frame 186.png";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BookingDetails = () => {
  return (
    <>   <Helmet>
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
            <a href="#" className="btn btn-primary book-btn mt-4">
              Book Now
            </a>
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
    </div>
    </>
  );
};

export default BookingDetails;
