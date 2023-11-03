import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "../Components/NavBar/Navbar";
import AddHotels from "../Pages/AddHotels/AddHotels";
import HotelDetials from "../Pages/HotelDetails/HotelDetials";
import Account from "../Pages/accountFlow/Account";
import { Footer } from "../Components/Footer/Footer";
import AddHotelsProvider from "../store/store";
import SearchContextProvider, { searchContext } from "../store/searchStore";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import AccountHistoryLayout from "../Layout/AccountHistoryLayout";
import AccountFlights from "../Components/accountFlow/AccountHistory/AccountHistory";
import AccountStays from "../Components/accountFlow/accountStays/AccountStays";
import { Suspense, lazy } from "react";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllCities from "../Pages/AllCities/AllCities";
import NotFound from "../Pages/notFound/notFound";
import LandingPage from "../Pages/Landing/LandingPage";
// import AccountLayout from "../Layout/accountLayout";
import AccountPayment from "../Components/accountFlow/AccountPayment/AccountPayment";

const AppRouter = () => {
  async function delayForDemo(promise) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

  let LandingLazy = lazy(() =>
    delayForDemo(import("../Pages/Landing/LandingPage"))
  );
  let AccountLazy = lazy(() =>
    delayForDemo(import("../Pages/accountFlow/Account"))
  );

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center LoaderParent">
          <div class="loader"></div>
        </div>
      }
    >
      <BrowserRouter>
        <SearchContextProvider>
          <NavigationBar />
          <AddHotelsProvider>
            <Routes>
              <Route path="/" element={<LandingLazy />} />
              <Route path="login" element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="bookingDetails" element={<BookingDetails />} />
              <Route path="account/:id" element={<AccountLazy />}>
              <Route path="history" element={<AccountHistoryLayout />}>
                <Route index={true} element={<AccountFlights />} />
                <Route path="stays" element={<AccountStays />} />
              </Route>
              <Route path="payment" element={<AccountPayment />} />
              </Route>
              <Route path="allcities" element={<AllCities />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="CountryHotels/:countryTitle"
                element={<AddHotels />}
              />
              <Route
                path="CountryHotels/:countryTitle/hotelDetials/:id"
                element={<HotelDetials />}
              />
            </Routes>
          </AddHotelsProvider>
        </SearchContextProvider>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
