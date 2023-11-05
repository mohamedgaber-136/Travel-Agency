import { useContext } from "react";
import { searchContext } from "../../../store/searchStore";
import AccountTicketCard from "../../AccountTicketCard/AccountTicketCard";

const AccountStays = () => {
  const { currentUserObj } = useContext(searchContext);

  return (
    <>
      {currentUserObj.bookings?.map((item) => (
        <AccountTicketCard />
      ))}

      {/* <AccountFlight /> */}
      {/* <AccountFlight /> */}
      {/* <AccountFlight /> */}
    </>
  );
};

export default AccountStays;
