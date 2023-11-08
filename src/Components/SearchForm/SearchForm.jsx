import { memo, useContext, useState } from "react";
import { searchSchema } from "./searchValidation/SearchValidation";
import { searchContext } from "../../store/searchStore";
import { useNavigate } from "react-router-dom";
import { InputGuests } from "./searchValidation/InputGuests";
import { addHotelsContext } from "../../store/store";
import "./SearchForm.css";
const SearchForm = () => {
  const navigate = useNavigate();
  const [isValid, setValidatation] = useState(true);
  const { searchData, setSeachData } = useContext(searchContext);
  const { setDestnation } = useContext(addHotelsContext);
  const getSearchData = async (event) => {
    event.preventDefault();
    let data = {
      destination: event.target[0].value,
      CheckIn: event.target[1].value,
      CheckOut: event.target[2].value,
      GuestAndRooms: event.target[3].value,
      nights:
        (new Date(event.target[2].value).getTime() -
          new Date(event.target[1].value).getTime()) /
        (1000 * 3600 * 24),
    };
    await searchSchema.isValid({ ...data }).then((validate) => {
      setValidatation(validate);
      if (validate) {
        setSeachData({ ...data });
        setDestnation(data.destination);
        navigate(`/CountryHotels/${data.destination}`);
      }
    });
  };

  return (
    <form
      onSubmit={getSearchData}
      className="  flex-column bg-white d-flex justify-content-start p-3   formParent "
    >
      <h3>Where Are You Going?</h3>
      <div
        className="  row flex-row  align-items-center align-self-center align-self-center
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
        <InputGuests />
      </div>
      <div className="d-flex justify-content-end align-items-center mt-2 container">
        <div className="d-flex  w-100 gap-3 align-items-center justify-content-end">
          <span className={isValid ? `d-none` : `text-danger`}>
            Hurry Insert All Data to Make Your Best Tour.............
          </span>
          <input type="submit" value={"Show Places"} />
        </div>
      </div>
    </form>
  );
};
export default memo(SearchForm);
