import { createContext, useContext, useEffect, useState } from "react";
import { searchContext } from "./searchStore";
import axios from "axios";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const addHotelsContext = createContext(0);
export default function CountryHotelsProvider(props) {
  const { searchData, database, currentUserObj } = useContext(searchContext);
  const [countryHotels, setCountryHotels] = useState([]);
  let [destination, setDestnation] = useState("");
  const [hotelObj, setHotelObj] = useState({
    photos: [],
    isFav: false,
  });
  const [isFavorites, setIsFavorites] = useState(false);
  const isFavoritesClick = (favHotel) => {
    hotelObj.isFav = !hotelObj.isFav;
    setIsFavorites(hotelObj.isFav);
    let favFoun = currentUserObj.favourites.find(({ id }) => favHotel.id == id);
    console.log(favFoun, "FOund");
  };

  const paramters = {
    headers: {
      "X-RapidAPI-Key": "549262dbc7mshcd47749bd23d273p1e156cjsn1bc3ab3b345e",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (destination !== "" && destination !== undefined) {
      console.log("getHotelsFromFirebase");
      // getHotelsFromFirebase();
      getLocationID();
    }
    console.log("hi Destnation");
  }, [destination]);

  function getHotelsFromFirebase() {
    const locatiosRef = collection(database, "locations");
    console.log(destination.toLowerCase(), "firebase detentaion");
    const que = query(
      locatiosRef,
      where("location", "==", destination.toLowerCase())
    );
    console.log(que, "query");
    getDocs(que).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        setCountryHotels(snapshot.docs[0].data().hotels);
      } else {
        getDocs(query(locatiosRef, where("location", "==", "cairo"))).then(
          (snapshot) => {
            setCountryHotels(snapshot.docs[0].data().hotels);
            console.log(snapshot.docs[0].data().hotels, "datadatadat");
          }
        );
      }
      // else {
      //   const queCairo = query(locatiosRef, where("location", "==", "cairo"));
      //   getDocs(queCairo).then((snapshot) => {
      //     console.log(snapshot.docs, "hotels ");

      //     setCountryHotels(snapshot.docs[0]);
      //   });
      // }
    });
  }

  async function getLocationID() {
    await axios
      .get(
        `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${destination}`,
        paramters
      )
      .then((response) => {
        console.log(response.data.data[0]);
        getHotelsData(response.data.data[0]);
      })
      .catch((error) => console.log(error, "error"));
    console.log(searchData.destination, "destination");
  }

  async function getHotelsData(location) {
    console.log(location.geoId, "id location");
    await axios
      .get(
        `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${location.geoId}&checkIn=2023-11-09&checkOut=2023-11-11&pageNumber=1&currencyCode=USD`,
        paramters
      )
      .then((response) => {
        console.log(response.data, "hotels details");
        console.log(response.data.data.data, "hotels data details");
        setCountryHotels(response.data.data.data);
        // const locatiosRef = collection(database, "locations");
        // addDoc(locatiosRef, {
        //   location: destination,
        //   hotels: response.data.data.data,
        // }).then((snapshot) => {
        //   console.log(snapshot, "djfhsdj");
        // });
      })
      .catch((error) => console.log(error, "error"));
  }

  async function getHotelsObj(id) {
    await axios
      .get(
        `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-11-04&checkOut=2023-11-11&currency=USD1`,
        paramters
      )
      .then((response) => {
        console.log(response.data.data);
        setHotelObj({ ...response.data.data });
      })
      .catch((error) => console.log(error, "error"));
    // 21213729
    // setHotelObj({ ...data.data, isFav: false });
    // console.log(data.data);

    // const hotelRef = collection(database, "hotels");
    // getDocs(hotelRef).then((snapshot) => {
    //   console.log(snapshot?.docs[0].data().details, "details");
    //   setHotelObj(snapshot?.docs[0].data().details);
    // });
  }

  useEffect(() => {
    if (hotelObj.title === undefined) {
      getHotelsObj();
    }
  }, []);
  console.log(hotelObj, "obj");

  return (
    <addHotelsContext.Provider
      value={{
        countryHotels,
        setCountryHotels,
        getHotelsObj,
        hotelObj,
        isFavoritesClick,
        isFavorites,
        getLocationID,
        setDestnation,
        destination,
      }}
    >
      {props.children}
    </addHotelsContext.Provider>
  );
}
