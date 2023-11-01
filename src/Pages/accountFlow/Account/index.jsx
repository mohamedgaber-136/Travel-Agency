import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import AccountInfo from "../../../Components/accountFlow/accountInfo/accountInfo";
import { Helmet } from "react-helmet";
import AccountLayout from "../../../Layout/accountLayout";
const Account = () => {
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
            <AccountInfo label="Name" content="John Doe" name="name" />
            <AccountInfo
              label="Email"
              content="john.doe@gmail.com"
              btn
              name="email"
            />
            <AccountInfo label="Password" content="John Doe" name="password" />
            <AccountInfo
              label="Phone number"
              content="+1 000-000-0000"
              name="phone"
            />
            <AccountInfo
              label="Address"
              content="St 32 main downtown, Los Angeles, California, USA"
              name="address"
            />
            <AccountInfo
              label="Date of birth"
              content="01-01-1992"
              name="birthdate"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Account;
