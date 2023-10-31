import React, { useContext } from "react";
import locationIcon from "./Location.png";
import unFillFav from "./Vector.png";
import "./addhotels.css";
import { SearchForm } from "../../Components/SearchForm/SearchForm";
import { useNavigate, useParams } from "react-router-dom";
import { addHotelsContext } from "../../store/store";
import { Helmet } from "react-helmet";
export default function AddHotels() {
  const { countryTitle } = useParams();
  const navigate = useNavigate();
  const { addHotels, getHotels } = useContext(addHotelsContext);
  const goToDetails = (id) => {
    navigate(`hotelDetials/${id}`);
  };

  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddHotel</title>
      </Helmet>
      <div>
        <div
          style={{
            width: "100%",
            marginTop: "150px",
          }}
        >
          <SearchForm />
        </div>
        <button onClick={() => getHotels()}>Get Data</button>
        {addHotels?.map((hotel) => (
          <div key={hotel.id} className="container p-3">
            <div className="card d-flex flex-md-row flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start">
              <div className="">
                <img
                  src={`${hotel.cardPhotos[0]?.sizes.urlTemplate
                    .replace("{width}", "300")
                    .replace("{height}", "300")}`}
                  alt=""
                />
              </div>
              <div className="d-flex flex-column p-3 w-100 ">
                <div className="d-flex flex-md-row flex-column justify-content-between m-0">
                  <div className="d-flex flex-column">
                    <h3>{hotel.title}</h3>
                    <p className="text-muted">
                      <span>
                        <img src={locationIcon} alt="" />
                      </span>
                      {hotel.secondaryInfo}
                    </p>
                  </div>
                  <div className="col-6"></div>
                  <p className="text-muted">
                    starting from
                    <br />
                    <p style={{ color: "salmon", fontSize: "20px" }}>
                      $240/night
                    </p>
                  </p>
                </div>
                <div className="d-flex flex-row mt-4 gap-3">
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid #3EB489",
                      borderRadius: "5px",
                      textAlign: "center",
                      padding: "2px",
                    }}
                  >
                    <p className="text-muted">{hotel.bubbleRating.rating}</p>
                  </div>
                  <p style={{ marginTop: "5px" }}>{hotel.badge.type}</p>
                </div>

                <div className="d-flex flex-row mt-5 gap-2 ">
                  <div
                    style={{
                      // width:'50px',
                      height: "50px",
                      border: "1px solid #3EB489",
                      borderRadius: "5px",
                      // padding:'2px',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="col-3 col-md-1"
                  >
                    <img src={unFillFav} alt="" />
                  </div>
                  <button
                    onClick={() => goToDetails(hotel.id)}
                    className="col-9 col-md-11"
                    style={{
                      backgroundColor: "#3EB489",
                      color: "black",
                      borderRadius: "5px",
                      border: "1px solid white",
                    }}
                  >
                    Show Detials
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
