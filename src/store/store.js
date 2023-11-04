import { createContext, useContext, useState } from "react";
import { searchContext } from "./searchStore";
export const addHotelsContext = createContext(0);
export default function AddHotelsProvider(props) {
  const { searchData } = useContext(searchContext);
  const [addHotels, setAddHotels] = useState([]);
  const [hotelObj, setHotelObj] = useState({});
  let [isFavorites, setIsFavorites] = useState(false);
  const isFavoritesClick = () => {
    hotelObj.isFav = !hotelObj.isFav;
    setIsFavorites(hotelObj.isFav);
  };
  const getHotels = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d2bbef58f4msh9acc2a7990e776ep114c48jsnfa0cf59d669c",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    const resId = await fetch(
      `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${searchData.destination}`,
      options
    );
    const getResId = await resId?.json();
    const cityId = await getResId?.data[0]?.geoId;
    console.log(cityId);
    const res = await fetch(
      `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${cityId}8&checkIn=2023-11-09&checkOut=2023-11-11&pageNumber=1&currencyCode=USD`,
      options
    );
    const data = await res?.json();
    setAddHotels([...data?.data?.data]);
 
  };
  const getHotelsObj = async (id) => {
    const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-11-04&checkOut=2023-11-11&currency=USD1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d2bbef58f4msh9acc2a7990e776ep114c48jsnfa0cf59d669c",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
    // 21213729
    const res = await fetch(url, options);
    const data = await res.json();
    setHotelObj({ ...data.data, isFav: false });
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
