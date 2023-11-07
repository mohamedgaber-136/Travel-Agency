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
  const { searchData, database ,currentUserObj} = useContext(searchContext);
  const [countryHotels, setCountryHotels] = useState([]);
  const [hotelObj, setHotelObj] = useState({
    photos: [],
    isFav: false,
  });
  const [isFavorites, setIsFavorites] = useState(false);
  const isFavoritesClick = (favHotel) => {
    hotelObj.isFav = !hotelObj.isFav;
    setIsFavorites(hotelObj.isFav);
    let favFoun=currentUserObj.favourites.find(({id})=>favHotel.id==id)
    console.log(favFoun,"FOund")
  }

  const paramters = {
    headers: {
      "X-RapidAPI-Key": "9e85c3b4aamsha66ed4058238f9cp1a0a97jsn1aa95abc07a5",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (searchData.destination !== "" && searchData.destination !== undefined) {
      console.log("getHotelsFromFirebase");
      getHotelsFromFirebase();
    }
  }, [searchData]);

  function getHotelsFromFirebase() {
    const locatiosRef = collection(database, "locations");
    const que = query(
      locatiosRef,
      where("location", "==", searchData.destination)
    );
    getDocs(que).then((snapshot) => {
      console.log(snapshot.docs[0].data().hotels, "datadatadat");
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
        `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${searchData.destination}`,
        paramters
      )
      .then(async (response) => {
        console.log(response.data.data[0]);
        await getHotelsData(response.data.data[0]);
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
        const locatiosRef = collection(database, "locations");
        addDoc(locatiosRef, {
          location: searchData.destination,
          hotels: response.data.data.data,
        }).then((snapshot) => {
          console.log(snapshot, "djfhsdj");
        });
      })
      .catch((error) => console.log(error, "error"));
  }

  async function getHotelsObj(id) {
    // await axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-11-04&checkOut=2023-11-11&currency=USD1`,
    //     paramters
    //   )
    //   .then((response) => {
    //     console.log(response.data.data);
    //     setHotelObj({ ...response.data.data, isFav: false });
    //   })
    //   .catch((error) => console.log(error, "error"));
    // 21213729
    // setHotelObj({ ...data.data, isFav: false });
    // console.log(data.data);

    const hotelRef = collection(database, "hotels");
    getDocs(hotelRef).then((snapshot) => {
      console.log(snapshot?.docs[0].data().details, "details");
      setHotelObj(snapshot?.docs[0].data().details);
    });
  }
  useEffect(() => {
    if (hotelObj.title == undefined) {
      getHotelsObj();
    }
  }, []);
  console.log(hotelObj, "obj");

  return (
    <addHotelsContext.Provider
      value={{
        countryHotels,
        getHotelsObj,
        hotelObj,
        isFavoritesClick,
        isFavorites,
        getLocationID,
      }}
    >
      {props.children}
    </addHotelsContext.Provider>
  );
}
