import React, { useContext, useEffect, useState } from "react";
import { SingleHotel } from "../CountryHotels/singleHotel";
import { searchContext } from "../../store/searchStore";
import Loading from "../../Components/Loading/Loading";
import { NavLink, Navigate } from "react-router-dom";
import NoFavourite from "./noFavourite";

export const Favourites = () => {
  let [favItems, setFavItems] = useState(null);
  let { currentUserObj, authorized } = useContext(searchContext);
  useEffect(() => {
    setFavItems(currentUserObj?.favourites);
  }, [currentUserObj]);
  if (!authorized) {
    return <Navigate to="/login" />;
  }
  console.log(favItems, "fav");
  return (
    <div className="favParent">
      {favItems?.length === 0 ? (
        <NoFavourite />
      ) : (
        favItems?.map((hotel, ind) => <SingleHotel hotel={hotel} key={ind} />)
      )}
    </div>
  );
};
