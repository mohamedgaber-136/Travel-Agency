import { createContext, useContext, useState } from "react";
import { searchContext } from "./searchStore";

export const addHotelsContext=createContext(0)

export default function AddHotelsProvider(props){
    const {searchData}=useContext(searchContext)
    const [addHotels,setAddHotels]=useState([])
    const[hotelObj,setHotelObj]=useState({})

    const getHotels= async() =>{
        console.log(searchData.destination)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4914fa0e31mshe8d9a281d6baf68p162f1ejsn1b496b986012',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };
          const resId= await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=${searchData.destination}`,options)     
          const getResId= await resId.json()
          const cityId = await getResId.data[0].geoId
          console.log(cityId)
          const res = await fetch(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${cityId}8&checkIn=2023-11-09&checkOut=2023-11-11&pageNumber=1&currencyCode=USD`,options) 
          const data =await res.json();
          setAddHotels([...data.data.data])
          console.log(data,"aya a7ga")
          console.log(addHotels)
    }
    const  getHotelsObj= async (id)=>{
        const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails?id=${id}&checkIn=2023-11-04&checkOut=2023-11-11&currency=USD1`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '4914fa0e31mshe8d9a281d6baf68p162f1ejsn1b496b986012',
            'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
      }
  };
  // 21213729
  const res = await fetch(url,options) 
  const data =await res.json();
  setHotelObj({...data.data})
  console.log(data.data)
      }
    return <addHotelsContext.Provider value={{addHotels,getHotels,getHotelsObj,hotelObj}}>
        {props.children}
         </addHotelsContext.Provider>
}

