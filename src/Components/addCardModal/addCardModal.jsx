import { useContext, useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { searchContext } from "../../store/searchStore";
import { bookingSchema } from "../../Pages/BookingDetails/bookingValidation";
import { Visa } from "../../assets/images";
import { countries } from "../../data/country";
import "./addCardModal.css";

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
    license: false,
  });
  const [errorMsg, setErrorMsg] = useState("");

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

  // form validation
  const bookingValidation = async (e) => {
    e.preventDefault();

    // const validationResult = await bookingSchema
    //   .validate({
    //     ...formData,
    //     expireDate: [expirationDate.month, expirationDate.year].join("/"),
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
    // this returns last error. however, as per the documentation, it should return the first error.
    // console.log(validationResult.errors, validationResult.params);

    console.log(formData, "formdata");
    const validationResult1 = await bookingSchema
      .validate(
        {
          ...formData,
          expireDate: [expirationDate.month, expirationDate.year].join("/"),
        },
        { abortEarly: false }
      )
      .then((result) => result)
      .catch((err) => {
        console.log(err, "error");
        return err;
      });
    // this returns array of all errors in correct order.
    console.log(validationResult1.errors);
    setErrorMsg(validationResult1.errors);

    // await bookingSchema
    //   .validate({
    //     ...formData,
    //     expireDate: [expirationDate.month, expirationDate.year].join("/"),
    //   })
    //   .then((result) => {
    //     console.log(result, "result");
    //     handleClose();

    //     updateCurrentUser({
    //       cards: [...currentUserObj.cards, formData],
    //     });

    //     setFormData({
    //       creditCard: "",
    //       cvc: "",
    //       expireDate: "",
    //       username: "",
    //       country: "",
    //       license: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    // await bookingSchema
    //   .isValid({
    //     ...formData,
    //     expireDate: [expirationDate.month, expirationDate.year].join("/"),
    //   })
    //   .then((data) => {
    //     setIsValidData(data);
    //     console.log(data, "data form");
    //   })
    //   .catch((err) => console.log(err.message, "error form"));
  };

  useEffect(() => {
    console.log(errorMsg, "error");
    console.log(formData, "form data");
    // if (isValidData) {

    // }
  }, []);
  // spacesV
  return (
    <Modal show={show} className="fs-4 mt-4 ModalParent" onHide={handleClose}>
      <Modal.Title className="p-4 fs-2">Add a new Card</Modal.Title>
      <Container>
        {errorMsg.length > 0 ? (
          <div className="alert-danger alert d-flex flex-column gap-1">
            {errorMsg.map((msg, index) => (
              <span key={index}>
                {++index} - {msg}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </Container>
      <Modal.Body className="p-4">
        <form className="d-flex flex-column " onSubmit={bookingValidation}>
          <div className="col">
            <div className=" w-100 d-flex flex-column justify-content-center align-items-center gap-4">
              <div className="card-input w-100 ">
                {/* credit card input  */}
                <label for="card-number" className="card-sub-label fw-normal  ">
                  Card Number
                </label>

                <div
                  class="input-group border rounded-3"
                  style={{ zIndex: "10" }}
                >
                  <input
                    type="text"
                    className="rounded-2 placeStyle  form-control border-0"
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
                  <div class="input-group-append ">
                    <span class="input-group-text h-100 bg-body border-0">
                      <img src={Visa} alt="visaImg" />
                    </span>
                  </div>
                </div>
              </div>
              {/* expiration date input  */}
              <div className=" d-flex w-100 justify-content-center gap-4 ">
                <div className="w-100 card-input">
                  <label className=" card-sub-label fw-normal ">
                    Exp. Date
                  </label>
                  <div className="form-control d-flex gap-3 p-0 border-0 ">
                    <select
                      length={6}
                      className="form-select form-select-lg text-center w-50"
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
                          // setFormData({
                          //   ...formData,
                          //   expireDate: [
                          //     expirationDate.month,
                          //     expirationDate.year,
                          //   ].join("/"),
                          // });
                        }
                        console.log(expirationDate.month, "month");
                        console.log(expirationDate.year, "year");
                        console.log(formData.expireDate, "date");
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
                      className="form-select form-select-lg text-center w-50"
                      onChange={(event) => {
                        if (event.target.value !== "YY") {
                          setExpirationDate({
                            ...expirationDate,
                            year: event.target.value,
                          });
                          // setFormData({
                          //   ...formData,
                          //   expireDate: [
                          //     expirationDate.month,
                          //     expirationDate.year,
                          //   ].join("/"),
                          // });
                        }
                        console.log(expirationDate.month, "month");
                        console.log(expirationDate.year, "year");
                        console.log(formData.expireDate, "date");
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
                </div>
                {/* cvc input  */}
                <div className="card-input">
                  <label className=" card-sub-label fw-normal  ">CVC</label>
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
              <div className="w-100 card-input">
                <label className="card-sub-label fw-normal ">
                  Name on Card
                </label>
                <input
                  type="text"
                  className="name placeStyle rounded-2 form-control w-100"
                  placeholder="Jon Doe"
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  required
                />
              </div>
              {/* selection countries input */}
              <div className="input-group d-flex  card-input">
                <label className="card-sub-label fw-normal  ">
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
          {/* check box and button submit  */}
          <Modal.Footer className="p-0 pt-4">
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
                  className=" fs-5 form-check-label  "
                  htmlFor="invalidCheck"
                  required
                >
                  Securely save my information for 1-click checkout
                </label>
              </div>

              <button
                type="submit"
                onClick={bookingValidation}
                className="w-100 my-2 book-btn py-2 rounded-3"
              >
                Add Card
              </button>
              <p className=" fw-light fs-5 m-auto">
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
