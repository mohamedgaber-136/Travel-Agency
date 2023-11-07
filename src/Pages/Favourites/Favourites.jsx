import React, { useContext, useEffect, useState } from "react";
import { SingleHotel } from "../CountryHotels/singleHotel";
import { searchContext } from "../../store/searchStore";
import Loading from "../../Components/Loading/Loading";
import { NavLink, Navigate } from "react-router-dom";

export const Favourites = () => {
  let [favItems, setFavItems] = useState([]);
  let { currentUserObj,authorized} = useContext(searchContext);
  useEffect(() => {
    setFavItems(currentUserObj.favourites);
  }, []);
  if (!authorized) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="favParent">
      {favItems?.map((hotel, ind) => (
        <SingleHotel hotel={hotel} key={ind} />
      ))}
    </div>
  );
};
