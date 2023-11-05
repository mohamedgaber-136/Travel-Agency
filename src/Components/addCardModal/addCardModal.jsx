import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { searchContext } from "../../store/searchStore";
import { bookingSchema } from "../../Pages/BookingDetails/bookingValidation";
import { Visa } from "../../assets/images";
import { countries } from "../../data/country";

const AddCardModal = ({ show, handleClose }) => {
  const { currentUserObj, setCurrentUserObj, updateCurrentUser } =
    useContext(searchContext);
  const [isValidData, setIsValidData] = useState(false);
  const [expirationDate, setExpirationDate] = useState({ month: "", year: "" });
  const [formData, setFormData] = useState({
    // validation schema
    creditCard: "",
    cvc: "",
    expireDate: "",
    username: "",
    country: "",
    license: "",
  });

  const month = () => {
    const x = [];
    for (let i = 0; i < 12; i++) {
      x.push(i + 1);
    }
    return [...x];
  };
  const year = () => {
    const x = [];
    const dateNow = new Date();
    const date = parseInt(dateNow.getFullYear().toLocaleString().slice(-2));
    for (let i = date; i < date + 50; i++) {
      x.push(i);
    }
    return [...x];
  };

  // handle credi card input
  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .slice(0, 16);
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

  console.log(expirationDate.month, "ajkgsg");

  // form validation
  const bookingValidation = async (e) => {
    e.preventDefault();

    const isValid = await bookingSchema
      .validate(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));

    setIsValidData(await bookingSchema.isValid(formData));

    if (isValidData) {
      handleClose();

      updateCurrentUser({
        cards: [...currentUserObj.cards, formData],
      });

      setFormData({
        creditCard: "",
        cvc: "",
        expireDate: "",
        username: "",
        country: "",
        license: "",
      });
    }
  };
  // spacesV
  return (
    <Modal show={show} className="fs-4 mt-4 ModalParent" onHide={handleClose}>
      <Modal.Title className="p-4 fs-2">Add a new Card</Modal.Title>
      <Modal.Body className="p-4">
        <form className="d-flex flex-column " onSubmit={bookingValidation}>
          <div className="col">
            <div className="coolinput w-100">
              <div className="inputVisa w-100 coolinput">
                {/* credit card input  */}
                <label for="card-number" className="text fw-normal labelText ">
                  Card Number
                </label>
                <input
                  type="text"
                  className="rounded-2 placeStyle  form-control"
                  placeholder="4321 4321 4321 4321"
                  maxLength={19}
                  value={cc_format(formData.creditCard)}
                  onChange={(e) => {
                    const str = e.target.value.replace(/\s/g, "");

                    if (!isNaN(str)) {
                      setFormData({
                        ...formData,
                        creditCard: str,
                      });
                    }
                  }}
                  required
                />
                <img src={Visa} alt="" className="visaDetails" />
              </div>
              {/* expiration date input  */}
              <div className="mb-3 d-flex w-100 justify-content-center gap-2">
                <div className="w-100">
                  <label className=" text fw-normal labelText">Exp. Date</label>
                  <br />

                  <div
                    className="form-control bg-danger d-flex gap-2 p-0"
                    style={{ height: "3rem" }}
                  >
                    <select
                    style={{height:'1.8rem'}}
                      className=" text-center border-0"
                      onChange={(event) => {
                        if (event.target.value !== "MM") {
                          if (event.target.value.length < 2) {
                            setExpirationDate({
                              ...expirationDate,
                              month: `0${event.target.value}`,
                            });
                          } else {
                            setExpirationDate({
                              ...expirationDate,
                              month: event.target.value,
                            });
                          }
                          setFormData({
                            ...formData,
                            expireDate: [
                              expirationDate.month,
                              expirationDate.year,
                            ].join("/"),
                          });
                        }
                        console.log(expirationDate.month);
                      }}
                    >
                      <option name={"mm"} disabled selected>
                        MM
                      </option>
                      {month().map((item, index) => (
                        <option name={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select
                      className=" text-center border-0"
                      onChange={(event) => {
                        if (event.target.value !== "YY") {
                          setExpirationDate({
                            ...expirationDate,
                            year: event.target.value,
                          });
                          setFormData({
                            ...formData,
                            expireDate: [
                              expirationDate.month,
                              expirationDate.year,
                            ].join("/"),
                          });
                        }
                      }}
                    >
                      <option name={"yy"} disabled selected>
                        YY
                      </option>

                      {year().map((item, index) => (
                        <option name={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <input
                    className="me-2 w-100 placeStyle rounded-2  form-control"
                    placeholder="02/27"
                    type="month"
                    value={formData.expireDate}
                    pattern="[0-9]{2}-[0-9]{2}"
                    // pattern="yy-MM"
                    // pattern="[0-9]{2}/[0-9]{2}"
                    onChange={(e) => {

                      // id="bday-month"
                      // type="month"
                      // name="bday-month"
                      // min="1900-01"
                      // max="2013-12" />

                      const date = new Date(e.target.value);

                      const dateFormat = [
                        String(date.getMonth() + 1).padStart(2, "0"),
                        String(date.getFullYear()).slice(-2),
                      ].join("-");

                      console.log(dateFormat, "formate date ");

                      setFormData({
                        ...formData,
                        expireDate: dateFormat,
                      });
                    }}
                    // aria-label="Exp. Date"
                    required
                  /> */}
                </div>
                {/* cvc input  */}
                <div>
                  <label className=" text fw-normal  labelText">CVC</label>
                  <input
                    // aria-label="CVC"
                    type="text"
                    className="me-2 w-100 placeStyle  rounded-2  form-control"
                    placeholder="456"
                    value={formData.cvc}
                    onChange={(e) => {
                      setFormData({ ...formData, cvc: e.target.value });
                      // if (typeof parseFloat(e.target.value) == Number) {
                      // }
                    }}
                    maxLength={3}
                    required
                  />
                </div>
              </div>
              {/* username input  */}
              <label className="text fw-normal labelText">Name on Card</label>
              <input
                type="text"
                className="name placeStyle rounded-2 form-control w-100"
                placeholder="Jon Doe"
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                required
              />
              {/* selection countries input */}
              <div className="input-group d-flex">
                <div className="col">
                  <label className="text fw-normal  labelText">
                    Country Or Region
                  </label>
                  <select
                    className="form-select rounded-2  form-control"
                    id="inputGroupSelect04"
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      // console.log(e.target.value, "eeeee");
                    }}
                    aria-label="Example select with button addon"
                  >
                    <option value="Choose a country" selected>
                      Choose a country
                    </option>
                    {countries.map((x) => (
                      <option value={x.name} key={x.id}>
                        {x.name}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* check box and button submit  */}
          <Modal.Footer>
            <div className="text">
              <div className="form-check">
                <input
                  className="form-check-input input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      license: e.target.checked,
                    });
                  }}
                  required
                />
                <label
                  className="text fs-5 form-check-label  "
                  htmlFor="invalidCheck"
                  required
                >
                  Securely save my information for 1-click checkout
                </label>
              </div>

              <button
                type="submit"
                onClick={bookingValidation}
                className="w-100 text my-2 book-btn py-2 rounded-3"
              >
                Add Card
              </button>
              <p className="text fw-light fs-5 m-auto">
                By confirming your subscription, you allow The Outdoor Inn Crowd
                Limited to charge your card for this payment and future payments
                in accordance with their terms. You can always cancel your
                subscription.
              </p>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCardModal;
