import React, { useContext, useEffect, useState } from "react";
import { SingleHotel } from "../CountryHotels/singleHotel";
import { searchContext } from "../../store/searchStore";
import Loading from "../../Components/Loading/Loading";

export const Favourites = () => {
  let [favItems, setFavItems] = useState([]);
  let { currentUserObj } = useContext(searchContext);
  useEffect(() => {
    setFavItems(currentUserObj.favourites);
  }, []);
  return (
    <div className="favParent">
      {favItems?.map((hotel, ind) => (
        <SingleHotel hotel={hotel} key={ind} />
      ))}
    </div>
  );
};
