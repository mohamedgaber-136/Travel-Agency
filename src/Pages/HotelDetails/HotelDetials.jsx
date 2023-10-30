import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addHotelsContext } from '../../store/store'

export default function HotelDetials() {
    const[hotelObj,setHotelObj]=useState({})
    const {id} =useParams()
    const{addHotels}= useContext(addHotelsContext)
    useEffect(()=>{
     getHotelsObj()
    },[])
    const getHotelsObj=()=>{
      let obj=addHotels?.find(obj=>
        obj.id==id
      )
      setHotelObj({...obj})
    }
  return (
    <div>{hotelObj.title}</div>
  )
}
