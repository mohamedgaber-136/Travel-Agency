import React, { useContext, useEffect } from "react";
import locationIcon from "./Location.png";
import unFillFav from "./Vector.png";
import FillFav from "../HotelDetails/assets/heart.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../store/searchStore";
import { addHotelsContext } from "../../store/store";
export const SingleHotel = ({ hotel, isFavPage }) => {
  let { currentUserObj, updateCurrentUser } = useContext(searchContext);
  let { destination } = useContext(addHotelsContext);
  let [clicked, setClicked] = useState(false);
  function clickedHeart() {
    setClicked(true);
    updateCurrentUser({ favourites: [...currentUserObj.favourites, hotel] });
    if (clicked) {
      setClicked(false);
      let deletedFav = currentUserObj.favourites.filter(
        ({ id }) => id !== hotel.id
      );
      updateCurrentUser({ favourites: [...deletedFav] });
    }
  }
  const checkfav = (hotel) => {
    let FoundId = currentUserObj?.favourites?.find(({ id }) => id == hotel?.id);
    if (FoundId === undefined) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  const navigate = useNavigate();
  const goToDetails = (id) => {
    navigate(`/CountryHotels/${destination}/hotelDetials/${id}`);
  };
  useEffect(() => {
    checkfav();
  }, []);
  return (
    <div className="container p-3">
      <div className="card d-flex flex-md-row flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start">
        <div className="singleCardParent">
          {/* <img
            src={`${hotel?.cardPhotos[0]?.sizes?.urlTemplate
              ?.replace("{width}", "300")
              ?.replace("{height}", "300")}`}
            alt=""
          /> */}
        </div>
        <div className="d-flex flex-column p-3 w-100 ">
          <div className="d-flex flex-md-row flex-column justify-content-between m-0">
            <div className="d-flex flex-column">
              <h3>{hotel?.title}</h3>
              <p className="text-muted">
                <span>
                  <img src={locationIcon} alt="" />
                </span>
                {hotel?.secondaryInfo}
              </p>
            </div>
            <div className="col-6"></div>
            <p className="text-muted">
              starting from
              <br />
              <span style={{ color: "salmon", fontSize: "20px" }}>
                $240/night
              </span>
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
              <p className="text-muted">{hotel?.bubbleRating?.rating}</p>
            </div>
            <p style={{ marginTop: "5px" }}>{hotel?.badge?.type}</p>
          </div>

          <div className="d-flex flex-row mt-5 gap-2">
            {isFavPage === "favPage" ? (
              <div />
            ) : (
              <div onClick={clickedHeart} className="col-3 col-md-1 favIcon">
                {clicked ? (
                  <img src={FillFav} alt="" />
                ) : (
                  <img src={unFillFav} alt="" />
                )}
              </div>
            )}
            <button
              onClick={() => goToDetails(hotel?.id)}
              className="col-9 col-md-10 p-2"
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
  );
};