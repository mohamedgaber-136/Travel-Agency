import React, { useEffect, useState } from "react";
import all from "../../data/city.json";
import axios from "axios";
import { Card } from "../../Components/Card/Card";
import "./allCities.css";
import Loading from "../../Components/Loading/Loading";
export default function AllCities() {
  const [cityImg, setCity] = useState([]);
  useEffect(() => {
    // getAllCities()
  }, []);
  const getAllCities = async () => {
    let arr = [];
    const url =
      "https://nomad-list-cities.p.rapidapi.com/nomad-list/europe?size=30&page=1&sort=desc&sort_by=overall_score";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "872d9711d6msh649af9c6f912c09p1fa3ffjsn9fd6f1d47461",
        "X-RapidAPI-Host": "nomad-list-cities.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const cities = data.map((city) => city.name);
    for (let i = 0; i < cities.length; i++) {
      const res = await axios.get(
        `https://api.pexels.com/v1/search/?page=1&per_page=2&query=${cities[i]}`,
        {
          headers: {
            Authorization:
              "dduIdgcxtb3X1K3WIllsexAvLU7spJTVWdd9ec9jbk2ii7qqWNQkCnBX",
          },
        }
      );
      console.log(res.data?.photos[0]?.src?.portrait);
      arr.push({
        img: res.data?.photos[0]?.src?.original,
        title: cities[i],
        id: Math.floor(Math.random() * 1000),
      });
    }
    console.log(arr);
    setCity([...arr]);
  };
  return (
    <div className="container city mb-3 d-flex flex-wrap gap-3 justify-content-center align-items-center">
      {cityImg.length ? (
        cityImg.map((city) => (
          <Card img={city.img} title={city.title} key={city.id} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
