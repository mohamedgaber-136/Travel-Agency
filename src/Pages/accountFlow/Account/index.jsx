import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import AccountInfo from "../../../Components/accountFlow/accountInfo/accountInfo";
import { Helmet } from "react-helmet";
import { searchContext } from "../../../store/searchStore";

// const initialInputs = {
//   firstName: "John doe",
//   email: "mahmoud@gmail.com",
//   password: "M123456",
//   phone: "01122334455",
//   address: "Egypt",
//   birthdate: "1/1/1111",
// };

const Account = () => {
  const { currentUserObj } = useContext(searchContext);
  const [inputs, setInputs] = useState(currentUserObj);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    email: "",
    password: "",
    phone: "",
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Account-Information</title>
      </Helmet>
      <div className="bg pb-3">
        <AccountLayout />
        <Container>
          <h2 className="py-4">Account</h2>
          <div className="account__info rounded-3">
            <AccountInfo
              label="Name"
              name="firstName"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Last Name"
              name="lastName"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Email"
              btn
              name="email"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Password"
              content="John Doe"
              name="password"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Phone number"
              content="+1 000-000-0000"
              name="phone"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Address"
              content="St 32 main downtown, Los Angeles, California, USA"
              name="address"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
            <AccountInfo
              label="Date of birth"
              content="01-01-1992"
              name="birthdate"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Account;
