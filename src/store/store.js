import { createContext, useContext, useState } from "react";
import { searchContext } from "./searchStore";
import axios from "axios";

export const addHotelsContext = createContext(0);

export default function AddHotelsProvider(props) {
  const { searchData } = useContext(searchContext);
  const [addHotels, setAddHotels] = useState([]);
  const [hotelObj, setHotelObj] = useState({});
  const [isFavorites, setIsFavorites] = useState(false);

  const isFavoritesClick = () => {
    hotelObj.isFav = !hotelObj.isFav;
    // isFavorites = !isFavorites
    setIsFavorites(hotelObj.isFav);
  };

  const getHotels = async () => {
    const resID = await axios.get(
      `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${searchData.destination}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "18895e8072msh5d4a99b4d106285p1f6ad8jsndaa66e54983f",
          "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
        },
      }
    );
    console.log(searchData.destination);
    console.log(resID, "resID");
    // const options = {
    //   method: "GET",
    // };
    // const resId = await fetch(
    //   `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${searchData.destination}`,
    //   options
    // );
    // const getResId = await resId?.json();
    // const cityId = await getResId?.data[0]?.geoId;
    // console.log(cityId);
    // const res = await fetch(
    //   `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${cityId}8&checkIn=2023-11-09&checkOut=2023-11-11&pageNumber=1&currencyCode=USD`,
    //   options
    // );
    // const data = await res?.json();
    // setAddHotels([...data?.data?.data]);
    // console.log(data, "aya a7ga");
    // console.log(addHotels);
  };
  const getHotelsObj = async (id) => {
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-11-04&checkOut=2023-11-11&currency=USD1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "18895e8072msh5d4a99b4d106285p1f6ad8jsndaa66e54983f",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    // 21213729
    const res = await fetch(url, options);
    console.log(res, "response");
    const data = await res.json();
    setHotelObj({ ...data.data, isFav: false });
    console.log(data.data, "hotel object");
  };
  return (
    <addHotelsContext.Provider
      value={{
        addHotels,
        getHotels,
        getHotelsObj,
        hotelObj,
        isFavoritesClick,
        isFavorites,
      }}
    >
      {props.children}
    </addHotelsContext.Provider>
  );
}
