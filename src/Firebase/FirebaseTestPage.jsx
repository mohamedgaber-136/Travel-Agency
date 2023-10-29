import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { authbase, database } from "./FirebaseInit";
import { Button } from "bootstrap";
import { citiesList } from "./city";
import { createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseTestPage = () => {
  const [usersList, setUsersList] = useState([]);

  const usersRef = collection(database, "users");

  function sginUpUser(
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    imageURL,
    birthDate
  ) {
    const userObj = {
      //   id: "qNf6tQjs5KjFaV9xE2Sz",
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      address: address,
      imageURL: imageURL,
      birthDate: birthDate,
      favourites: [],
      card: 0, // list or single
    };
    addDoc(usersRef, userObj);
  }

  //   useEffect(() => {
  //     getDocs(usersRef).then((snapshot) => {
  //       //   console.log(snapshot.docs, "users");
  //       //   const usersList = snapshot.docs.map((user) => user.data());
  //       setUsersList(
  //         snapshot.docs.map((user) => {
  //           return { ...user.data(), id: user.id };
  //         })
  //       );
  //       //   console.log(usersList, "list");
  //     });
  //   }, [usersList]);

  function addUser() {
    const usersRef = collection(database, "user");

    const userObj = {
      //   id: "qNf6tQjs5KjFaV9xE2Sz",
      firstName: "Yasmin",
      lastName: "Dahy",
      email: "yasmin.d45@mail.com",
      phone: "+34374387489237",
      password: "123456",
      address: "any thing any where",
      imageURL: "",
      birthDate: Date(),
      favourites: [],
      card: 0, // list or single
    };
    addDoc(usersRef, userObj);
  }

  // function deleteUser() {
  //   const userName = document.querySelector("#userID").value.toLowerCase();
  //   const found = usersList.find(
  //     ({ firstName }) => firstName.toLowerCase() === userName
  //   );
  //   const deletUserRef = doc(database, "user", found.id);
  //   deleteDoc(deletUserRef);

  //   console.log(userName);
  // }
  // const [signedUser, setSignedUser] = useState({});
  // function signInUser() {
  //   createUserWithEmailAndPassword(
  //     authbase,
  //     "person102@mail.com",
  //     "123456"
  //   ).then((cred) => {
  //     console.log(cred.user, "login");
  //     setSignedUser(cred.user)
  //   });
  // }

  // const cityRef = collection(database, "cities");

  // const allCityRef = collection(database, "all-cities");
  // function addCities1000() {
  //   citiesList.forEach((city, index) => {
  //     if (index <= 1000) {
  //       addDoc(allCityRef, {
  //         name: city.name,
  //       });
  //     }
  //   });
  // }

  // function addCitiesList() {
  //   const cityListRef = collection(database, "city-list");

  //   addDoc(cityListRef, {
  //     list: citiesList,
  //   });
  //   // citiesList.forEach((city) => {
  //   //   addDoc(cityRef, {
  //   //     name: city.name,
  //   //   });
  //   // });
  // }

  // function getLength() {
  //   console.log(citiesList.length, "local");
  //   getDocs(cityRef).then((snapshot) =>
  //     console.log(snapshot.docs.length, "cloud")
  //   );

  //   getDocs(allCityRef).then((snapshot) =>
  //     console.log(snapshot.docs.length, "1000")
  //   );
  //   console.log(citiesList.length, "local");
  // }

  return (
    <div>
      <span>Hello From Firebase</span>

      {usersList.map((user, index) => (
        <ul key={user.id}>
          <li>{user.id}</li>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.phone}</li>
        </ul>
      ))}
    </div>
  );
};

export default FirebaseTestPage;
