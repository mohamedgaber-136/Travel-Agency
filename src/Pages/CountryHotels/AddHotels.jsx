import React, { useContext, useEffect, useRef, useState } from "react";
import "./addhotels.css";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useNavigate, useParams } from "react-router-dom";
import { addHotelsContext } from "../../store/store";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading/Loading";
import { searchContext } from "../../store/searchStore";
import { Suspense, lazy } from "react";
export default function CountryHotelsPage() {
  const { countryTitle } = useParams();
  const { countryHotels, setCountryHotels, isFavorites, isFavoritesClick } =
    useContext(addHotelsContext);
  const { searchData, setSeachData, scrollToTopPage } =
    useContext(searchContext);
  const { setDestnation, countryCheck } = useContext(addHotelsContext);
  const topRef = useRef();

  useEffect(() => {
    scrollToTopPage(topRef);
    console.log(countryHotels, "hoootels");
    if (countryTitle !== undefined) {
      setDestnation(countryTitle);
    }
  }, [countryTitle]);
  // useEffect(()=>{

  // },[countryTitle])
  async function delayForDemo(promise) {
    return new Promise((resolve) => {
      setTimeout(resolve, 6000);
    }).then(() => promise);
  }
  let LazySingle = lazy(() => delayForDemo(import("./singleHotel")));

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${countryTitle}-Hotels`}</title>
      </Helmet>
      <div ref={topRef}>
        <div
          style={{
            width: "100%",
            marginTop: "150px",
          }}
        >
          <SearchForm />
        </div>

        <Suspense fallback={<Loading />}>
        {!countryCheck ? (
          countryHotels?.length !== 0 ? (
            countryHotels?.map((hotel, ind) => (
                <LazySingle
                  hotel={hotel}
                  key={ind}
                  countryTitle={countryTitle}
                />
                ))
                ) : (
                  <Loading />
                  )
                  ) : (
                    <span>noFound</span>
                    )}
                    </Suspense>
      </div>
    </>
  );
}
