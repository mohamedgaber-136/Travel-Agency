import { useContext } from "react";
import { searchContext } from "../../../store/searchStore";
import AccountTicketCard from "../../AccountTicketCard/AccountTicketCard";
import AccountFlight from "../accountFlight/accountFlight";
import { Container } from "react-bootstrap";
import {BookedTicket} from '../../BookedTicket/BookedTicket'

const AccountStays = () => {
  const { currentUserObj } = useContext(searchContext);

  return (
    <>
        {/* {currentUserObj.bookings?.map((item) => ( */}
        {[1, 2, 3, 4].map((item) => (
          <BookedTicket />
          // <AccountFlight />
          // <AccountTicketCard />
        ))}

        {/* <AccountFlight /> */}
        {/* <AccountFlight /> */}
    </>
  );
};

export default AccountStays;
