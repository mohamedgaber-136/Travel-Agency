import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addHotelsContext } from "../../store/store";
import "./hotelDetials.css";
import stars from "./assets/Frame 52.png";
import star from "./assets/Stars.png";
import locationIcon from "./assets/Location.png";
import unFillFav from "./assets/Vector.png";
import FillFav from "./assets/heart.png";
import share from "./assets/Share.png";
import imgHotel from "./assets/Rectangle 3.png";
import "bootstrap/js/dist/carousel";
import Loading from "../../Components/Loading/Loading";
export default function HotelDetials() {
  const { id } = useParams();
  const { getHotelsObj, hotelObj, isFavorites, isFavoritesClick } =
    useContext(addHotelsContext);
  useEffect(() => {
    getHotelsObj(id);
  }, []);

  return hotelObj.length !== 0 ? (
    <div className="container details">
      {/* title and price  */}
      <div className="d-flex flex-md-row flex-column">
        <div className="col-md-11 col-12">
          <div className="d-flex flex-column flex-md-row ">
            <h3>{hotelObj.title}</h3>
            <div className="d-flex">
              <div className="imgStars p-1">
                <img src={stars} alt="" />
              </div>
              <p className="p-1">5 stars</p>
            </div>
          </div>
          <p className="text-muted">
            <span>
              <img src={locationIcon} alt="" />
            </span>
            {hotelObj?.location?.address}
          </p>
        </div>
        <p className="text-muted">
          starting from
          <br />
          <p style={{ color: "salmon", fontSize: "20px" }}>$240/night</p>
        </p>
      </div>
      {/* button */}
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-lg-center">
        <div className="d-flex flex-row mt-4 gap-3 ">
          <div>
            <p className="text-muted box-rate">{hotelObj?.rating}</p>
          </div>
          <p className="m-text">{hotelObj?.rankingDetails}</p>
          <p className="m-text text-muted">{hotelObj?.numberReviews} Reviews</p>
        </div>
        <div className="d-flex gap-3">
          <div onClick={isFavoritesClick} className="col-3 col-md-1 favIcon">
            {hotelObj.isFav ? (
              <img src={FillFav} alt="" />
            ) : (
              <img src={unFillFav} alt="" />
            )}
          </div>
          <div className="col-3 col-md-1 favIcon">
            <img src={share} alt="" />
          </div>
          <button className="button-style">Book Now</button>
        </div>
      </div>
      {/* carsoul */}
      <div className=" d-flex justify-content-center my-3">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carouselDiv"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner" style={{}}>
            {hotelObj.photos ? (
              <>
                <div className="carousel-item active w-100">
                  <img
                    src={hotelObj?.photos[0]?.urlTemplate
                      ?.replace("{width}", "500")
                      .replace("{height}", "500")}
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100">
                  <img
                    src={hotelObj?.photos[1]?.urlTemplate
                      ?.replace("{width}", "500")
                      .replace("{height}", "500")}
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100">
                  <img
                    src={hotelObj?.photos[2]?.urlTemplate
                      ?.replace("{width}", "500")
                      .replace("{height}", "500")}
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item w-100">
                  <img
                    src={hotelObj?.photos[3]?.urlTemplate
                      ?.replace("{width}", "500")
                      .replace("{height}", "500")}
                    className="w-100"
                    alt="..."
                  />
                </div>
              </>
            ) : (
              <div className="carousel-item w-100">
                <img src={imgHotel} className="w-100" alt="..." />
              </div>
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr className="my-5" />
      {/* overview */}
      <div>
        <h4>Overview</h4>
        <p className="text-muted">
          Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
          Bosphorus Hotel Istanbul has risen from the ashes of the historic Park
          Hotel, which also served as Foreign Affairs Palace 120 years ago and
          is hosting its guests by assuming this hospitality mission. With its
          452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18
          meeting rooms including 4 dividable ones and 3 terraces with Bosphorus
          view, Istanbuls largest terrace with Bosphorus view (4500 m2) and
          latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is
          destined to be the popular attraction point of the city. Room and
          suite categories at various sizes with city and Bosphorus view, as
          well as 68 separate luxury suites, are offered to its special guests
          as a wide variety of selection.
        </p>
        <div className="d-flex flex-wrap gap-3 my-5 ">
          <div className="features pt-3 d-flex flex-column justify-content-between align-items-center  ">
            <h3
              style={{
                color: "white",
              }}
            >
              {hotelObj?.rating}
            </h3>
            <h6>Very Good</h6>
            <p
              style={{
                fontSize: "15px",
              }}
              className="text-muted"
            >
              {hotelObj?.numberReviews}
            </p>
          </div>
          <div className="features-bg bg-transparent  d-flex flex-column justify-content-between align-items-center pt-3 ">
            <img src={star} alt="" />
            <p
              style={{
                fontSize: "15px",
              }}
              className=""
            >
              Near park
            </p>
          </div>
          <div className="features-bg bg-transparent d-flex flex-column justify-content-between align-items-center pt-3">
            <img src={star} alt="" />
            <p
              style={{
                fontSize: "15px",
              }}
              className=""
            >
              Clean hotel
            </p>
          </div>
          <div className="features-bg  bg-transparent d-flex flex-column justify-content-between align-items-center pt-3">
            <img src={star} alt="" />
            <p
              style={{
                fontSize: "15px",
              }}
              className=""
            >
              Near theater{" "}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      {/* Amentions */}
      <div>
        <h4>Amenities</h4>
        <div className="my-3 p-2 listDiv d-flex flex-row justify-content-start  ">
          <ul className="list-unstyled d-flex flex-column gap-4 col-6">
            <li>
              <i className="fa-solid fa-door-open"></i>{" "}
              <span className="text-muted">Outdoor</span>
            </li>
            <li>
              <i className="fa-solid fa-person-swimming"></i>{" "}
              <span className="text-muted">Open pool</span>
            </li>
            <li>
              <i className="fa-solid fa-spa"></i>{" "}
              <span className="text-muted">Spa and wellness center</span>
            </li>
            <li>
              <i className="fa-solid fa-utensils"></i>{" "}
              <span className="text-muted">Restaurant</span>
            </li>
            <li>
              <i className="fa-solid fa-bell"></i>{" "}
              <span className="text-muted">Room servies</span>
            </li>
          </ul>
          <ul className="list-unstyled d-flex flex-column gap-4 ">
            <li>
              <i className="fa-solid fa-dumbbell"></i>{" "}
              <span className="text-muted">Fitness room</span>
            </li>
            <li>
              <i className="fa-solid fa-martini-glass"></i>{" "}
              <span className="text-muted">Bar\Lounage</span>
            </li>
            <li>
              <i className="fa-solid fa-wifi"></i>{" "}
              <span className="text-muted">Free wifi</span>
            </li>
            <li>
              <i className="fa-solid fa-mug-hot"></i>{" "}
              <span className="text-muted">Tea\Caffea machine</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Reviews */}
      <div>
        <hr className="my-5" />
        <h4>Reviews</h4>
        <p className="text-muted">{hotelObj?.numberReviews} verified reviews</p>
        <hr className="my-3" />
        <div>
          <div className="d-flex flex-row gap-2">
            <h5>Omar ayman</h5>
            <p className="text-muted">5.0 Amazing</p>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <hr className="my-3" />
        <div>
          <div className="d-flex flex-row gap-2">
            <h5>Mohamed Gaber</h5>
            <p className="text-muted">4.5 Exeleant</p>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <hr className="my-3" />
        <div>
          <div className="d-flex flex-row gap-2">
            <h5>Mohamed gemy</h5>
            <p className="text-muted">3.5 Good</p>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <hr className="my-3" />
        <div>
          <div className="d-flex flex-row gap-2">
            <h5>Mahmoud Ragb</h5>
            <p className="text-muted">4.0 very good</p>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
