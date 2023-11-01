import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/signupImg.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../Login/Login.css";
import "./SignUp.css";
import { Helmet } from "react-helmet";
import { searchContext } from "../../store/searchStore";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "@firebase/auth";

function SignUpPage() {
  const { authbase, database, setCurrentUserObj, currentUserObj } =
    useContext(searchContext);
  const [isHiddenPassword, setIsHiddenPassword] = useState("password");
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [checkLicenes, setCheckLicenes] = useState(false);
  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    imageURL: "",
    birthDate: "",
    bookinds: [],
    favourites: [],
    cards: [],
  });
  function handlePasswordType() {
    setIsHiddenPassword(!isHiddenPassword);
  }

  function userSignUp(event) {
    event.preventDefault();
    // const usersRef = collection(database, "users");
    // const q = query(usersRef, where("email", "==", userObject.email)).then(
    // (data) => console.log(data, "query")
    // );
    // check if all data entered is correct
    console.log(userObject, "user");

    // if (!checkLicenes) {
    //   // setErrorMessage("Please Accept the License");
    // } else {
    //   console.log(userObject, "user");
    //   console.log(userObject.email, "user");
    //   console.log(userObject.password, "user");

    //   const usersRef = collection(database, "users");
    //   const que = query(usersRef, where("email", "==", userObject.email));
    //   getDocs(que).then((snapshot) => {
    //     if (snapshot.docs.length > 0) {
    //       // setErrorMessage("This Email Is Already In Use");
    //     } else {
    //       // setErrorMessage("");
    //       addDoc(usersRef, userObject).then((snapshot) => {
    //         console.log(snapshot, "djfhsdj");
    //         sessionStorage.setItem("currentUser", snapshot.id);
    //         setCurrentUserObj({ ...userObject, id: snapshot.id });
    //         // setCurrentUserObj({...currentUserObj, id: snapshot.id });
    //       });
    //     }
    //     console.log(snapshot.docs, "sdjkfhdjs");
    //   });
    // }

    // sessionStorage.setItem("currentUser", "MBBTUT1Njk33i6BB3uKr");
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
      </Helmet>
      <div className="container signupParent d-flex justify-content-center align-items-center ">
        <div className="  justify-content-center flex-column flex-md-row d-flex align-items-center gap-3 w-100 h-100">
          <div
            className="imgContainer shadow"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          <form
            className="logForm border shadow rounded-4 d-flex flex-column justify-content-center align-items-center gap-2 h-100 bg-light"
            onSubmit={userSignUp}
          >
            <div className="align-self-start d-flex flex-column p-2 ">
              <h2 className="m-0">Signup</h2>
              <span>Signup now and get full access to our app.</span>
            </div>

            <div class="d-flex w-100 gap-2">
              <input
                required
                placeholder="Firstname"
                type="text"
                class="form-control"
                onChange={(event) =>
                  setUserObject({
                    ...userObject,
                    firstName: event.target.value,
                  })
                }
              />

              <input
                required
                placeholder="Lastname"
                type="text"
                class="form-control"
                onChange={(event) =>
                  setUserObject({ ...userObject, lastName: event.target.value })
                }
              />
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

            <input
              type="text"
              className="form-control "
              placeholder="Enter your Phone"
              required
              onChange={(event) =>
                setUserObject({ ...userObject, phone: event.target.value })
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

            <div className="input-group ">
              <input
                type={isHiddenPassword ? "password" : "text"}
                className="form-control"
                placeholder="Confirm your Password"
                required
                onChange={(event) => {
                  if (userObject.password !== event.target.value) {
                    setErrorMessages("Password Does Not Match");
                  } else {
                    setErrorMessages("");
                  }
                }}
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

            <div className="align-self-start">
              <input
                type="checkbox"
                className="form-check-input "
                onChange={(event) => setCheckLicenes(event.target.checked)}
              />
              <label className="px-1">
                I agree to all the Terms and Privacy Policies{" "}
              </label>
            </div>

            <div className="d-flex flex-column w-75">
              <button
                className={submitEnabled ? "submitBtn" : "submitBtn-disabled"}
                // onClick={userSignIn}
                disabled={submitEnabled}
              >
                Create Account
              </button>
              <span className="fs-6 ps-2 text-danger">{errorMessages}</span>
            </div>

            <div className="   d-flex align-items-center justify-content-center">
              <span> Already have an acount?</span>
              <span className=" url-colored btn p-1">Sign In</span>
            </div>

            {/* <div className="d-flex   gap-2">
              <button className="btn border seeAllBtn">
                <FcGoogle size={25} />
                <span className="px-2">Google</span>
              </button>
              <button className="btn border seeAllBtn">
                <FaFacebook size={25} color="blue" />
                <span className="px-2">Facebook</span>
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
