import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database, usersRef } from "./Firebase";
import { Button } from "bootstrap";
import { citiesList } from "./city";

const FirebaseTestPage = () => {
  const [usersList, setUsersList] = useState([]);
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
    const userObj = {
      //   id: "qNf6tQjs5KjFaV9xE2Sz",
      firstName: "Yasmin",
      lastName: "Dahy",
      email: "yasmin.d45@mail.com",
      phone: "+34374387489237",
      password: "123456",
      favourites: [],
      card: 0, // list or single
    };
    addDoc(usersRef, userObj);
  }

  function deleteUser() {
    const userName = document.querySelector("#userID").value.toLowerCase();
    const found = usersList.find(
      ({ firstName }) => firstName.toLowerCase() === userName
    );
    const deletUserRef = doc(database, "user", found.id);
    deleteDoc(deletUserRef);

    console.log(userName);
  }

  const cityRef = collection(database, "cities");

  const allCityRef = collection(database, "all-cities");
  function addCities1000() {
    citiesList.forEach((city, index) => {
      if (index <= 1000) {
        addDoc(allCityRef, {
          name: city.name,
        });
      }
    });
  }

  function addCitiesList() {
    const cityListRef = collection(database, "city-list");

    addDoc(cityListRef, {
      list: citiesList,
    });
    // citiesList.forEach((city) => {
    //   addDoc(cityRef, {
    //     name: city.name,
    //   });
    // });
  }

  function getLength() {
    console.log(citiesList.length, "local");
    getDocs(cityRef).then((snapshot) =>
      console.log(snapshot.docs.length, "cloud")
    );

    getDocs(allCityRef).then((snapshot) =>
      console.log(snapshot.docs.length, "1000")
    );
    console.log(citiesList.length, "local");
  }

  return (
    <div>
      <span>Hello From Firebase</span>
      <button className="btn btn-primary" onClick={addUser}>
        Add User
      </button>

      {usersList.map((user, index) => (
        <ul key={`user-${index}`}>
          <li>{user.id}</li>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
          <li>{user.phone}</li>
        </ul>
      ))}

      <input name="userID" id="userID" />
      <button className="btn btn-warning" onClick={deleteUser}>
        Delete User
      </button>

      <button className="btn btn-secondary" onClick={addCities1000}>
        Add Cities
      </button>

      <button className="btn btn-danger" onClick={getLength}>
        Get Length
      </button>
    </div>
  );
};

export default FirebaseTestPage;
