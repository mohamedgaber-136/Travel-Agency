import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUp";
import { NavigationBar } from "../Components/NavBar/Navbar";
import LandingPage from "../Pages/Landing/LandingPage";
import {Test} from "../Pages/Test/Test";
import Account from "../Pages/accountFlow/Account";
import { Footer } from "../Components/Footer/Footer";

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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


export default AppRouter;
