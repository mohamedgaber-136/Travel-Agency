import React, { useEffect, useState } from "react";
import img from "../../assets/loginImg.png";

import "./Login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";

function LoginPage() {
  const [isHiddenPassword, setIsHiddenPassword] = useState("password");
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [credential, setCredential] = useState({});

  function handlePasswordType() {
    setIsHiddenPassword(!isHiddenPassword);
  }

  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  function userSignIn(event) {
    event.preventDefault();

    if (userObject.email !== "" && userObject.password !== "") {
      setErrorMessage("");
    } else {
      setErrorMessage("Please Enter The Required Inputs");
    }

    // signInWithEmailAndPassword(authbase, userObject.email, userObject.password)
    //   .then((cred) => {
    //     console.log(cred, "sign in");
    //     setCredential(cred.user);
    //     // let x = { ...cred, phoneNumber: "+123456" };
    //     // console.log(x, "x");
    //     // authbase.currentUser = cred.user;
    //     // add user from storage
    //   })
    //   .catch((error) => {
    //     console.log(error.message, "error");
    //     setErrorMessage(error.message);
    //   });

    // get the user from the database and put it on the context

    console.log("ajsgs");
  }

  useEffect(() => {
    console.log(userObject, "user");
    console.log(credential, "user");
  }, [userObject, credential]);

  useEffect(() => {
    if (userObject.email !== "" && userObject.password !== "") {
      setSubmitEnabled(true);
      setErrorMessage("");
    } else {
      setSubmitEnabled(false);
    }
  }, [userObject]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="container loginParent d-flex justify-content-center align-items-center ">
        <div className=" justify-content-center flex-column flex-md-row d-flex align-items-center gap-3 w-100 ">
          <div
            className="imgContainer shadow"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          {/* <button
            onClick={() => {
              console.log(authbase.currentUser, "test");
              authbase.currentUser.uid = "0";
            }}
          >
            test
          </button> */}

          <form
            className="logForm border shadow rounded-4 d-flex flex-column justify-content-center align-items-center gap-2 bg-light"
            onSubmit={userSignIn}
          >
            <div className=" align-self-start d-flex flex-column p-2 ">
              <h2 className="m-0">Login</h2>
              <span>Login to access your Golobe account</span>
            </div>

            <input
              type="email"
              className="form-control "
              placeholder="Enter your Email"
              required
              onChange={(event) =>
                setUserObject({ ...userObject, email: event.target.value })
              }
            />

            <div className="input-group ">
              <input
                type={isHiddenPassword ? "password" : "text"}
                className="form-control"
                placeholder="Enter your Password"
                required
                onChange={(event) =>
                  setUserObject({
                    ...userObject,
                    password: event.target.value,
                  })
                }
              />
              <div className="input-group-append">
                <span
                  className=" input-group-text  h-100"
                  onClick={handlePasswordType}
                >
                  {isHiddenPassword ? (
                    <BsEyeSlashFill size={23} />
                  ) : (
                    <BsEyeFill size={23} />
                  )}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={(event) =>
                    setUserObject({
                      ...userObject,
                      rememberMe: !userObject.rememberMe,
                    })
                  }
                />
                <label className="px-1">Remember me </label>
              </div>

              <span className="btn p-0 url-colored">Forgot password?</span>
            </div>

            <div className="d-flex flex-column w-75">
              <button
                className={submitEnabled ? "submitBtn" : "submitBtn-disabled"}
                onClick={userSignIn}
                // disabled={submitEnabled}
              >
                Sign In
              </button>
              <span className="fs-6 ps-2 text-danger">{errorMessage}</span>
            </div>

            <div className="   d-flex align-items-center justify-content-center">
              <span> Don't have an account?</span>
              <span className=" url-colored btn p-1">Sign Up</span>
            </div>

            <p className="  ">Or login With</p>

            <div className="d-flex   gap-2">
              <button className="btn border seeAllBtn">
                <FcGoogle size={25} />
                <span className="px-2">Google</span>
              </button>
              <button className="btn border seeAllBtn">
                <FaFacebook size={25} color="blue" />
                <span className="px-2">Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
