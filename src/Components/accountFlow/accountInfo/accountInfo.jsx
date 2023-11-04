import { useContext, useEffect, useRef, useState } from "react";
import { searchContext } from "../../../store/searchStore";
const AccountInfo = ({
  label,
  name,
  setInputs,
  inputs,
  errorMessage,
  setErrorMessage,
  type,
}) => {
  const { updateCurrentUser } = useContext(searchContext);
  const [readOnly, setReadOnly] = useState(true);
  const [newPass, setNewPass] = useState({});
  const inputRef = useRef();
  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    if (
      e.target.value === "" &&
      e.target.name !== "address" &&
      e.target.name !== "birthdate"
    ) {
      setErrorMessage({
        ...errorMessage,
        [e.target.name]: "value is required",
      });
    } else {
      const val = e.target.value;
      const input = e.target.name;

      if (
        !val.match(/^[a-zA-Z]+[a-zA-Z0-9-_.]*@[a-z]+\.[a-z]+/) &&
        input === "email"
      ) {
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: "Please Enter valid email",
        });
      } else if (!val.match(/^[a-zA-Z]{3,}/) && input === "name") {
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: "Name Can Not Be Less Than 3 And Only Charachtersl",
        });
      } else if (!val.match(/^[0-9]{9,}/) && input === "phone") {
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: "Enter Valid phone",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          [e.target.name]: "",
        });
      }
    }
  };

  const handleSubmit = () => {
    if (type === "password") {
      if (
        newPass.newPassword === newPass.checkNewPassword &&
        newPass.newPassword !== undefined &&
        newPass.newPassword.length >= 6
      ) {
        setReadOnly(true);
        updateCurrentUser({
          password: newPass.newPassword,
          confirmPassword: newPass.newPassword,
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          password: "New Password must Be more than 6 and matched",
        });
        setReadOnly(false);
      }
    } else {
      setReadOnly(true);
      updateCurrentUser(inputs);
    }
  };
  const NewPasssData = (e) => {
    if (e.target.name) {
      setNewPass({ ...newPass, newPassword: e.target.value });
    } else {
      setNewPass({ ...newPass, checkNewPassword: e.target.value });
    }
    setErrorMessage({
      ...errorMessage,
      password: "",
    });
  };

  return (
    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between pb-4">
      <div>
        <span>{label}</span> <br />
        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex gap-2 flex-column ">
            <input
              ref={inputRef}
              type={
                readOnly === true
                  ? type === "password"
                    ? "password"
                    : "text"
                  : type === "password"
                  ? "text"
                  : type
              }
              className={
                readOnly === false
                  ? "border-0 px-2 "
                  : "border-0 px-2 AccountInPut"
              }
              value={inputs[name]}
              readOnly={type === "password" ? true : readOnly}
              name={name}
              onChange={handleInputChange}
            />
            {type === "password"
              ? !readOnly && (
                  <>
                    <input
                      type={"text"}
                      className={
                        readOnly === false
                          ? "border-0 px-2 "
                          : "border-0 px-2 AccountInPut"
                      }
                      placeholder="Enter Your New Password"
                      readOnly={readOnly}
                      name="newPass"
                      onChange={NewPasssData}
                    />
                    <input
                      type={"text"}
                      placeholder="ReEnter Your New Password"
                      className={
                        readOnly === false
                          ? "border-0 px-2 "
                          : "border-0 px-2 AccountInPut"
                      }
                      readOnly={readOnly}
                      onChange={NewPasssData}
                    />
                  </>
                )
              : ""}
          </div>
          {!readOnly && (
            <button
              disabled={errorMessage[name]}
              onClick={handleSubmit}
              className="btn btn-outline-primary d-flex py-1 px-3 align-items-center gap-1"
            >
              submit
            </button>
          )}
        </div>
        <p className="text-danger">{errorMessage[name]}</p>
      </div>
      <div className="d-flex justify-content-between flex-wrap gap-3">
        {name === "birthdate" && inputs["birthdate"] !== undefined ? (
          ""
        ) : (
          <button
            onClick={() => {
              inputRef.current.focus();
              setReadOnly(false);
            }}
            className="btn btn-outline-success d-flex py-1 px-3 align-items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.3559 1.67988L14.3558 1.67985C14.3123 1.63202 14.2595 1.59351 14.2007 1.56665C14.1419 1.53979 14.0782 1.52514 14.0135 1.52358C13.9489 1.52202 13.8846 1.53358 13.8245 1.55757C13.7645 1.58157 13.7099 1.61749 13.6641 1.66316L13.6641 1.66318L13.2776 2.04783C13.2351 2.09031 13.2112 2.14792 13.2112 2.20798C13.2112 2.26803 13.2351 2.32563 13.2775 2.36812C13.2775 2.36812 13.2775 2.36812 13.2776 2.36813L13.6319 2.72186L13.632 2.72191C13.653 2.74306 13.678 2.75985 13.7056 2.7713C13.7331 2.78275 13.7627 2.78864 13.7925 2.78864C13.8224 2.78864 13.8519 2.78275 13.8795 2.7713C13.907 2.75985 13.9321 2.74306 13.9531 2.72191L13.9532 2.72183L14.33 2.34686L14.3301 2.34683M14.3559 1.67988L14.3732 1.66407C14.555 1.86313 14.5372 2.17313 14.3466 2.36345L14.3301 2.34683M14.3559 1.67988C14.5287 1.86901 14.5124 2.16473 14.3301 2.34683M14.3559 1.67988L14.3301 2.34683M6.85472 8.46035L6.8547 8.46037C6.82335 8.49159 6.80056 8.53036 6.78853 8.57294L6.78822 8.57404L6.78819 8.57403L6.5274 9.3508C6.52245 9.36773 6.52213 9.38568 6.52647 9.40278C6.53085 9.42001 6.53979 9.43574 6.55236 9.44831C6.56493 9.46088 6.58066 9.46983 6.59789 9.4742C6.61499 9.47854 6.63294 9.47822 6.64987 9.47328L7.42601 9.21248L7.4271 9.21212L7.4271 9.21214C7.46969 9.20011 7.50846 9.17732 7.53968 9.14597L7.5397 9.14595L13.1709 3.50415C13.1709 3.50414 13.1709 3.50412 13.1709 3.50411C13.2186 3.45585 13.2454 3.3907 13.2454 3.32282C13.2454 3.25494 13.2187 3.1898 13.1709 3.14154L6.85472 8.46035ZM6.85472 8.46035L12.496 2.82911C12.5443 2.78091 12.6098 2.75385 12.678 2.75385C12.7463 2.75385 12.8117 2.78091 12.8601 2.82911L13.1709 3.14149L6.85472 8.46035Z"
                fill="black"
                stroke="#4C4850"
                strokeWidth="0.046875"
              />
              <path
                d="M12.0731 6.05188L8.26406 9.86844C8.11684 10.016 7.9359 10.1255 7.73688 10.1875L6.9275 10.4584C6.73542 10.5127 6.53234 10.5147 6.3392 10.4644C6.14606 10.414 5.96985 10.313 5.82871 10.1719C5.68758 10.0308 5.58662 9.85456 5.53626 9.66142C5.4859 9.46828 5.48794 9.26521 5.54219 9.07312L5.81313 8.26375C5.87492 8.06478 5.98421 7.88385 6.13156 7.73656L9.94812 3.92688C9.98311 3.89193 10.0069 3.8474 10.0166 3.7989C10.0263 3.75041 10.0214 3.70014 10.0025 3.65445C9.98357 3.60875 9.95154 3.56969 9.91044 3.5422C9.86934 3.51471 9.82101 3.50002 9.77156 3.5H3.25C2.78587 3.5 2.34075 3.68437 2.01256 4.01256C1.68437 4.34075 1.5 4.78587 1.5 5.25V12.75C1.5 13.2141 1.68437 13.6592 2.01256 13.9874C2.34075 14.3156 2.78587 14.5 3.25 14.5H10.75C11.2141 14.5 11.6592 14.3156 11.9874 13.9874C12.3156 13.6592 12.5 13.2141 12.5 12.75V6.22844C12.5 6.17899 12.4853 6.13066 12.4578 6.08956C12.4303 6.04846 12.3912 6.01643 12.3456 5.99753C12.2999 5.97864 12.2496 5.97371 12.2011 5.98338C12.1526 5.99306 12.1081 6.01689 12.0731 6.05188Z"
                fill="black"
              />
            </svg>
            Change
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountInfo;
