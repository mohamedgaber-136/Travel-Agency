import React, { useContext, useEffect, useState } from "react";
import "./addhotels.css";
import { SearchForm } from "../../Components/SearchForm/SearchForm";
import { useNavigate, useParams } from "react-router-dom";
import { addHotelsContext } from "../../store/store";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading/Loading";
import { searchContext } from "../../store/searchStore";
import { SingleHotel } from "./singleHotel";
export default function CountryHotelsPage() {
  const { countryTitle } = useParams();
 
  const { countryHotels, isFavorites, isFavoritesClick } =
    useContext(addHotelsContext);
  const { searchData, setSeachData } = useContext(searchContext);


  useEffect(() => {
    console.log(countryHotels, "hoootels");
    // if (countryTitle !== undefined) {
    //   setSeachData({ ...searchData, destination: countryTitle });
    // }
  }, [countryTitle]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${countryTitle}-Hotels`}</title>
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

        {countryHotels?.length !== 0 ? (
          countryHotels?.map((hotel,ind) => (
            <SingleHotel hotel={hotel} key={ind} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
