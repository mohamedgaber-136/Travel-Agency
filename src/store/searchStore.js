import { createContext, useState } from "react";

export const searchContext = createContext(0)

export default function SearchContextProvider(props){
    let [searchData, setSeachData] = useState({});

return <searchContext.Provider value={{searchData,setSeachData}}>
{props.children}
</searchContext.Provider>
}