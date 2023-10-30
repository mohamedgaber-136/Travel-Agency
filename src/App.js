<<<<<<< HEAD
import React from 'react'
import AppRouter from "./AppRouter/Router"
function App() {
  return (
   <><AppRouter/></> 
   
  )
=======
import AppRouter from "./AppRouter/Router";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { NavigationBar } from "./Components/NavBar/Navbar";
// import FirebaseTestPage from "./Firebase/FirebaseTestPage";
import Account from "./Pages/accountFlow/Account";
function App() {
  return (
    <>
      <AppRouter />
      {/* <NavigationBar /> */}
      {/* <Account /> */}
    
      <FirebaseTestPage />
    </>
  );
>>>>>>> d1bb36a4c5ec00da2b7fac7e4b549b70ac847d40
}

export default App
