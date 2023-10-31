import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUp";
import { NavigationBar } from "../Components/NavBar/Navbar";
import LandingPage from "../Pages/Landing/LandingPage";
import AddHotels from "../Pages/AddHotels/AddHotels";
import HotelDetials from "../Pages/HotelDetails/HotelDetials";
import Account from "../Pages/accountFlow/Account";
import { Footer } from "../Components/Footer/Footer";
import AddHotelsProvider from "../store/store";
import SearchContextProvider from "../store/searchStore";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <SearchContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signUp" element={<SignUpPage />} />
          <Route path="bookingDetails" element={<BookingDetails />} />
          <Route path="account" element={<Account />} />
        </Routes>
        <AddHotelsProvider>
          <Routes>
            <Route path="CountryHotels/:countryTitle" element={<AddHotels />} />
            <Route
              path="CountryHotels/:countryTitle/hotelDetials/:id"
              element={<HotelDetials />}
            />
          </Routes>
        </AddHotelsProvider>
      </SearchContextProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
