import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUp";
import { NavigationBar } from "../Components/NavBar/Navbar";
import LandingPage from "../Pages/Landing/LandingPage";
import Account from "../Pages/accountFlow/Account";
import AddHotels from "../Pages/AddHotels/AddHotels";
import HotelDetials from "../Pages/HotelDetails/HotelDetials";
import AddHotelsProvider from "../store/store";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
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


export default AppRouter;
