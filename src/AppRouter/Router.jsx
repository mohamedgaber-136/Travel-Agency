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
import AllCities from "../Pages/AllCities/AllCities";
import AccountLayout from "../Layout/accountLayout";
import AccountHistory from "../Components/accountFlow/AccountHistory/AccountHistory";
import AccountHistoryLayout from "../Layout/AccountHistoryLayout";
import AccountFlights from "../Components/accountFlow/AccountHistory/AccountHistory";
import AccountStays from "../Components/accountFlow/accountStays/AccountStays";
import AccountPayment from "../Components/accountFlow/AccountPayment/AccountPayment";
import NotFoundPage from "../Pages/notFound/notFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <NavigationBar />
        <AddHotelsProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="bookingDetails" element={<BookingDetails />} />
            <Route path="account/:id" element={<Account />} />
            <Route path="allcities" element={<AllCities />} />
            <Route path="*" element={<NotFoundPage />} />
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
