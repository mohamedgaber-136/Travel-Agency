import { createContext, useEffect, useState } from "react";
import { initializeApp } from "@firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  updateDoc,
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
  //--------------------- firebase --------------------//
  initializeApp(firebaseConfig);
  const database = getFirestore();

  //--------------------- useState --------------------//

  let [searchData, setSeachData] = useState({});
  const [currentUserObj, setCurrentUserObj] = useState({ id: "0" });
  let [authorized, setAuthorized] = useState(false);

  const userID = localStorage.getItem("currentUser");
  const currentRef = doc(database, "users", currentUserObj?.id);
  const usersReference = collection(database, "users");

  //--------------------- useEffect --------------------//
  useEffect(() => {
    if (currentUserObj?.id === "0") {
      if (userID !== null) {
        getCurrentUserData();
      } else {
        console.log("no snapshot");
      }
    }
  }, []);

  //--------------------- getCurrentUserData --------------------//
  const getCurrentUserData = () => {
    const currentRef = doc(database, "users", userID);
    getDoc(currentRef).then((snapshot) => {
      console.log(snapshot.data(), "snap");
      setCurrentUserObj({ ...snapshot.data(), id: userID });
    });
  };

  //--------------------- currentUserSnapshot --------------------//
  onSnapshot(currentRef, (snapshot) => {
    console.log(snapshot.data(), "snapshot listen");
  });

  //--------------------- updateCurrentUser --------------------//
  const updateCurrentUser = (change) => {
    if (currentUserObj?.id !== "0") {
      updateDoc(currentRef, { ...change }).then((snapshot) => {
        getCurrentUserData();
        console.log("first");
      });
    }
  };

  //--------------------- lazy loading delay function --------------------//
  async function delayForDemo(promise) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

  return (
    <searchContext.Provider
      value={{
        searchData,
        setSeachData,
        database,
        setCurrentUserObj,
        currentUserObj,
        updateCurrentUser,
        usersReference,
        authorized,
        setAuthorized,
        delayForDemo,
      }}
    >
      {props.children}
    </searchContext.Provider>
  );
}
