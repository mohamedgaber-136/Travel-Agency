import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import AccountInfo from "../../../Components/accountFlow/accountInfo/accountInfo";
import { Helmet } from "react-helmet";
import { searchContext } from "../../../store/searchStore";
import { Navigate } from "react-router-dom";
import { Suspense } from "react";
import AccountLayout from '../../../Layout/accountLayout'
const Account = () => {
  const { currentUserObj, authorized } = useContext(searchContext);
  const [inputs, setInputs] = useState(currentUserObj);
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    email: "",
    password: "",
    phone: "",
  });
  console.log(authorized)
  if (!authorized) {
    return <Navigate to="/login" />;
  }
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center LoaderParent">
          <div class="loader"></div>
        </div>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Account-Information</title>
      </Helmet>
      <div className="bg pb-3">
        <AccountLayout/>
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
              type={'text'}
            />
            <AccountInfo
              label="Last Name"
              name="lastName"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'text'}

            />
            <AccountInfo
              label="Email"
              btn
              name="email"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'text'}

            />
            <AccountInfo
              label="Password"
              content="John Doe"
              name="password"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'password'}
            />
            <AccountInfo
              label="Phone number"
              content="+1 000-000-0000"
              name="phone"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'text'}

            />
            <AccountInfo
              label="Address"
              content="St 32 main downtown, Los Angeles, California, USA"
              name="address"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'text'}

            />
            <AccountInfo
              label="Date of birth"
              content="01-01-1992"
              name="birthdate"
              inputs={inputs}
              setInputs={setInputs}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              type={'text'}
            />
          </div>
        </Container>
      </div>
    </Suspense>
  );
};

export default Account;
