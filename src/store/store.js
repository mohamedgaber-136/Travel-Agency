import { createContext, useContext, useState } from "react";
import { searchContext } from "./searchStore";

export const addHotelsContext=createContext(0)

export default function AddHotelsProvider(props){
    const {searchData}=useContext(searchContext)
    const [addHotels,setAddHotels]=useState([])
    const getHotels= async() =>{
        console.log(searchData.destination)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b9800b3e8msh60444ec86e43414p1c3014jsn665d3a4a422a',
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
    return <addHotelsContext.Provider value={{addHotels,getHotels}}>
        {props.children}
         </addHotelsContext.Provider>
}

