import { useState } from "react";
export const SearchForm = () => {
  let [searchData, setSeachData] = useState({});
  let [guest, setGuest] = useState(1);
  let [room, setRoom] = useState(1);
  let [showAddTable, setAddTable] = useState(false);
  const addGuest = (x, y) => {
    if (y >= 1) {
      x(++y);
    }
  };
  const removeGuestOrRoom = (x, y) => {
    if (y > 1) {
      x(--y);
    }
  };
  const showTable = (x) => {
    setAddTable(x);
  };
  const getSearchData = (event) => {
    event.preventDefault();
    let data = {
      destination: event.target[0].value,
      CheckIn: event.target[1].value,
      CheckOut: event.target[2].value,
      GuestAndRooms: event.target[3].value,
    };
    setSeachData({ ...data });
    console.log(searchData);
  };
  return (
    <form
      onSubmit={getSearchData}
      className="  flex-column bg-white d-flex justify-content-start p-3   formParent "
    >
      <h3>Where Are You Going?</h3>
      <div
        className=" row flex-row  align-items-center align-self-center align-self-center
 w-100"
      >
        <div className="coolinput col-6 ">
          <label htmlFor="location" className="text">
            <i className="fa-solid fa-couch px-1"></i>YourDestnation:
          </label>
          <input
            type="text"
            placeholder="Istanbul,Turkey"
            name="location"
            className="input"
          />
        </div>
        <div className="coolinput  col-6 col-md-2">
          <label htmlFor="checkin" className="text">
            checkIn:
          </label>
          <input type="date" name="checkin" className="input p-2" />
        </div>
        <div className="coolinput  col-6 col-md-2">
          <label htmlFor="checkout" className="text">
            checkOut:
          </label>
          <input type="date" name="checkout" className="input p-2" />
        </div>
        <div className="coolinput Guests col-6 col-md-2">
          <label htmlFor="roomguest" className="text">
            Rooms&Guests:
          </label>
          <input
            type="text"
            placeholder="1Room and 2Guests"
            name="roomguest"
            value={`${room}Room and ${guest}Guests`}
            className="input"
            onClick={() => showTable(true)}
          />
          <div
            className={
              showAddTable ? `addGuest d-flex flex-column gap-4` : ` d-none `
            }
          >
            <div className="d-flex justify-content-between">
              <span>adults</span>
              <div className="addArea d-flex justify-content-between">
                <button onClick={() => addGuest(setGuest, guest)}>
                  <i className="fa-solid fa-plus text-primary"></i>
                </button>
                <span>{guest}</span>
                <button onClick={() => removeGuestOrRoom(setGuest, guest)}>
                  <i className="fa-solid fa-minus text-primary"></i>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <span>Rooms</span>
              <div className="addArea d-flex justify-content-between">
                <button type="button" onClick={() => addGuest(setRoom, room)}>
                  <i className="fa-solid fa-plus text-primary"></i>
                </button>
                <span>{room}</span>
                <button
                  type="button"
                  onClick={() => removeGuestOrRoom(setRoom, room)}
                >
                  {" "}
                  <i className="fa-solid fa-minus text-primary "></i>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="DoneBtnAddGuest"
              onClick={() => showTable(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-2 container">
        <input type="submit" value={"Show Places"} />
      </div>
    </form>
  );
};
