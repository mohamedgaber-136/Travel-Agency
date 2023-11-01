import { createContext, useEffect, useState } from "react";
import { initializeApp } from "@firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb-UkvpCD0WgqHJMgLK6UBnXKBJWRSZzE",
  authDomain: "iti-final-project-ammmoz06.firebaseapp.com",
  projectId: "iti-final-project-ammmoz06",
  storageBucket: "iti-final-project-ammmoz06.appspot.com",
  messagingSenderId: "1029659505242",
  appId: "1:1029659505242:web:22dfc008d7d7e348085e63",
};

export const searchContext = createContext(0);

export default function SearchContextProvider(props) {
  let [searchData, setSeachData] = useState({});
  const [currentUserObj, setCurrentUserObj] = useState({ id: "0" });

  initializeApp(firebaseConfig);
  const database = getFirestore();
  //   const authbase = getAuth();
  const usersReference = collection(database, "users");

  useEffect(() => {
    if (currentUserObj?.id === "0") {
      // const userID = sessionStorage.getItem("currentUser");
      const userID = localStorage.getItem("currentUser");
      if (userID !== null) {
        const currentRef = doc(database, "users", userID);
        getDoc(currentRef).then((snapshot) => {
          console.log(snapshot.data(), "snap");
          setCurrentUserObj({ ...snapshot.data(), id: userID });
        });
      } else {
        console.log("no snapshot");
      }
    }
  }, [currentUserObj]);

  // useEffect(() => {
  //   if (currentUserObj.id !== "0") {
  const currentRef = doc(database, "users", currentUserObj?.id);
  onSnapshot(currentRef, (snapshot) => {
    console.log(snapshot.data(), "snapshot listen");
  });
  //   }
  // }, [currentUserObj.id]);

  // to update the user data
  // const docRef = doc(database, "users", "iPEM2P83CxXFucngXpWq");
  // updateDoc(docRef, { address: "Hello From The Other Side" }).then(
  // (snapshot) => console.log(snapshot)
  //   );

  function isLoggedUser() {
    if (currentUserObj.id === "0") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <searchContext.Provider
      value={{
        searchData,
        setSeachData,
        database,
        setCurrentUserObj,
        usersReference,
      }}
    >
      {props.children}
    </searchContext.Provider>
  );
}
