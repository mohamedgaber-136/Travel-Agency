import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { searchContext } from "../../store/searchStore";
import { bookingSchema } from "../../Pages/BookingDetails/bookingValidation";
import { Visa } from "../../assets/images";
import { countries } from "../../data/country";

const AddCardModal = ({ show, handleClose }) => {
  const { currentUserObj, setCurrentUserObj, updateCurrentUser } =
    useContext(searchContext);
  const [isValidData, setIsValidData] = useState(false);

  const [formData, setFormData] = useState({
    // validation schema
    creditCard: "",
    cvc: "",
    expireDate: "",
    username: "",
    country: "",
    license: "",
  });

  // handle credi card input
  function cc_format(value) {
    // function cc_format() {
    // const v = formData.creditCard
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .slice(0, 16);
    // .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      // if (i !== v.length - 1) {
      //   console.log(v.substr(i, 4), "subpart");
      //   console.log(parts, "parts");
      // parts.push(v.slice(i, 4));
      parts.push(v.substr(i, 4));
      // }
    }

    // return parts.length > 1 ? parts.join(" ") : formData.creditCard;
    return parts.length > 1 ? parts.join(" ") : value;
    // return parts.length > 1 ?parts.replace() : value;
  }

  // form validation
  const bookingValidation = async (e) => {
    e.preventDefault();
    // console.log(formData, "rrrrrr");

    const isValid = await bookingSchema
      .validate(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));

    // const isValid = await bookingSchema.isValid(formData);
    setIsValidData(await bookingSchema.isValid(formData));
    // console.log(isValidData);

    if (isValidData) {
      handleClose();

      //   console.log(currentUserObj, "adduser");
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
      // setCurrentUserObj({
      //   ...currentUserObj,
      //   cards: formData,
      // });
    }
  };

  return (
    <Modal show={show} className="fs-4 mt-4" onHide={handleClose}>
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
                  // value={cc_format(val)}
                  value={cc_format(formData.creditCard)}
                  // defaultValue={cardNum}
                  // pattern="[0-9 ]+"
                  onChange={(e) => {
                    // setVal(e.target.value);
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
              <div className="mb-3 d-flex  gap-5 w-100 justify-content-center">
                <div className="w-100">
                  <label className=" text fw-normal labelText">Exp. Date</label>
                  <br />
                  <input
                    className="me-2 w-100 placeStyle rounded-2  form-control"
                    placeholder="02/27"
                    type="date"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        expireDate: e.target.value,
                      });
                    }}
                    // aria-label="Exp. Date"
                    required
                  />
                </div>
                {/* cvc input  */}
                <div>
                  <label className=" text fw-normal  labelText">CVC</label>
                  <input
                    // aria-label="CVC"
                    type="number"
                    className="me-2 w-100 placeStyle  rounded-2  form-control"
                    placeholder="456"
                    value={formData.cvc}
                    onChange={(e) => {
                      //   if (e.target.value.length <= 3) {
                      setFormData({ ...formData, cvc: e.target.value });
                      //   }
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
