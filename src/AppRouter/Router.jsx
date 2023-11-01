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
<<<<<<< HEAD
import AllCities from "../Pages/AllCities/AllCities";
=======
import AccountLayout from "../Layout/accountLayout";
import AccountHistory from "../Components/accountFlow/AccountHistory/AccountHistory";
import AccountHistoryLayout from "../Layout/AccountHistoryLayout";
import AccountFlights from "../Components/accountFlow/AccountHistory/AccountHistory";
import AccountStays from "../Components/accountFlow/accountStays/AccountStays";
import AccountPayment from "../Components/accountFlow/AccountPayment/AccountPayment";
>>>>>>> 1ccd04675f6de49bb1bfcba641e14ae2c1df2e50

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
<<<<<<< HEAD
          <Route path="account" element={<Account />} />
          <Route path="allcities" element={<AllCities/>} />
=======
          <Route path="account" element={<AccountLayout />}>
            <Route index={true} element={<Account />} />
            <Route path="history" element={<AccountHistoryLayout />}>
              <Route index={true} element={<AccountFlights />} />
              <Route path="stays" element={<AccountStays />} />
            </Route>
            <Route path="payment" element={<AccountPayment />} />
          </Route>
>>>>>>> 1ccd04675f6de49bb1bfcba641e14ae2c1df2e50
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
