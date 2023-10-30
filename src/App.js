import { Route, Router, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavBar/Navbar";
import Account from "./Pages/accountFlow/Account";
import BookingDetails from "./Pages/BookingDetails/BookingDetails";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="bookingDetails" element={<BookingDetails />} />
      </Routes>
      {/* <Account /> */}
    </>
  );
}

export default App;
