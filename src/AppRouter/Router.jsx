<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from '../Pages/SignUp/SignUp'
import LoginPage from '../Pages/Login/Login'

const AppRouter = () => {
    return (
        <BrowserRouter> 
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='signUp' element={<SignUpPage/>}/>
        </Routes>
        </BrowserRouter> 
    )
}
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUp";
import { NavigationBar } from "../Components/NavBar/Navbar";
import LandingPage from "../Pages/Landing/LandingPage";
import {Test} from "../Pages/Test/Test";
import Account from "../Pages/accountFlow/Account";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='CountryHotels/:countryTitle'element={<Test/>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route path="account" element={<Account />} />
        <Route path="addHotels" element={<AddHotels/>} />
        <Route path={`addHotels/hotelDetials/:id` }element={<HotelDetials/>} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> d1bb36a4c5ec00da2b7fac7e4b549b70ac847d40


export default AppRouter;
