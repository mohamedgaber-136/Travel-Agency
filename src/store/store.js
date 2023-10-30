import { createContext, useState } from "react";

export const addHotelsContext=createContext(0)

export default function AddHotelsProvider(props){
    const [addHotels,setAddHotels]=useState([])
    const getHotels= async() =>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'aa092521d4mshe20e99bf647336ap13e2a5jsn9ffc441b79d1',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };
          const res = await fetch("https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=186338&checkIn=2023-11-09&checkOut=2023-11-11&pageNumber=1&currencyCode=USD'",options) 
          const data =await res.json();
          setAddHotels([...data.data.data])
    }
    <addHotelsContext.Provider value={{addHotels,getHotels}}>
        {props.children}
    </addHotelsContext.Provider>
}

