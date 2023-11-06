import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/loginImg.png";
import "./Login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, getDocs, query, where } from "firebase/firestore";
import { searchContext } from "../../store/searchStore";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import swal from "sweetalert";
import { ProfileImg } from "./../../Layout/ProfileImg";

function LoginPage() {
  const {
    usersReference,
    setCurrentUserObj,
    setAuthorized,
    authorized,
    auth,
    createNewUserObj,
  } = useContext(searchContext);

  const navigate = useNavigate();

  const [isHiddenPassword, setIsHiddenPassword] = useState("password");
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  useEffect(() => {
    if (
      userObject.email === "" ||
      userObject.password === "" ||
      !userObject.email.match(/^[a-zA-Z]+[a-zA-Z0-9-_.]*@[a-z]+\.[a-z]+/) ||
      userObject.password < 6
    ) {
      setSubmitEnabled(false);
      // setErrorMessage("Make Sure To Enter Email and Password");
    } else {
      setSubmitEnabled(true);
      setErrorMessage("");
    }
  }, [userObject]);

  function userSignIn(event) {
    event.preventDefault();

    if (submitEnabled) {
      setAuthorized(true);
      const que = query(usersReference, where("email", "==", userObject.email));
      getDocs(que).then((snapshot) => {
        console.log(snapshot, "login");
        if (snapshot.docs.length > 0) {
          const currentUser = snapshot.docs[0].data();
          console.log(currentUser.password, "pass");
          if (currentUser.password === userObject.password) {
            setCurrentUserObj({ ...currentUser, id: snapshot.docs[0].id });
            if (userObject.rememberMe) {
              localStorage.setItem("currentUser", snapshot.docs[0].id);
            } else {
              sessionStorage.setItem("currentUser", snapshot.docs[0].id);
            }
            navigate("/");
          } else {
            setErrorMessage("Password is Incorrect");
          }
        } else {
          setErrorMessage("This Email Does Not Have Account");
        }
      });
    }
  }

 

  function logInWithGoogleOrFacebook(type) {
    // var provider = new firebase.auth.GoogleAuthProvider();
    const provider =
      type === "google" ? new GoogleAuthProvider() : new FacebookAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user, "firebase result");

        const que = query(
          usersReference,
          where("email", "==", result.user.email)
        );
        setAuthorized(true);

        getDocs(que).then((snapshot) => {
          if (snapshot.docs.length > 0) {
            console.log(snapshot.docs[0].data(), "data");
            console.log(snapshot.docs[0].id, "id");
            localStorage.setItem("currentUser", snapshot.docs[0].id);
            setCurrentUserObj({
              ...snapshot.docs[0].data(),
              id: snapshot.docs[0].id,
            });
            console.log("login with same email");
          } else {
            const user = {
              firstName: result.user.displayName.split(" ")[0],
              lastName:
                result.user.displayName?.split(" ")[1] === undefined
                  ? ""
                  : result.user.displayName?.split(" ")[1],
              email: result.user.email,
              password: result.user.uid,
              profileImg: result.user.photoURL,
            };

            createNewUserObj({ ...user });
            console.log(user, "logged user");
          }
          swal({
            icon: "success",
            button: false,
            closeOnClickOutside: false,
            timer: 2000,
          }).then(() => navigate("/"));
        });
      })
      .catch((error) => {
        console.log(error.message, "error");
      });
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="container loginParent d-flex justify-content-center align-items-center ">
        <div className=" justify-content-center flex-column flex-md-row d-flex align-items-center gap-3 w-100">
          <div
            className="imgContainer shadow "
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

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
              onChange={(event) => {
                setUserObject({ ...userObject, email: event.target.value });
                if (event.target.value === "") {
                  setErrorMessage("Email can not be empty ");
                } else {
                  setErrorMessage("");
                }
              }}
            />

            <div className="input-group ">
              <input
                type={isHiddenPassword ? "password" : "text"}
                className="form-control"
                placeholder="Enter your Password"
                required
                onChange={(event) => {
                  setUserObject({
                    ...userObject,
                    password: event.target.value,
                  });
                  if (event.target.value === "") {
                    setErrorMessage("password can not be empty ");
                  } else {
                    setErrorMessage("");
                  }
                }}
              />
              <div className="input-group-append">
                <span
                  className=" input-group-text  h-100"
                  onClick={() => setIsHiddenPassword(!isHiddenPassword)}
                >
                  {isHiddenPassword ? (
                    <BsEyeSlashFill size={23} />
                  ) : (
                    <BsEyeFill size={23} />
                  )}
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center w-100 ">
              <div>
                <input
                  type="checkbox"
                  defaultValue={userObject.rememberMe}
                  className="form-check-input"
                  onChange={(event) =>
                    setUserObject({
                      ...userObject,
                      rememberMe: event.target.value,
                    })
                  }
                />
                <label className="px-1">Remember me </label>
              </div>
            </div>

            <div className="d-flex flex-column w-75 py-2">
              <button
                className={submitEnabled ? "submitBtn" : "submitBtn-disabled"}
                onClick={userSignIn}
              >
                Sign In
              </button>
              <span className="fs-6 ps-2 text-danger">{errorMessage}</span>
            </div>

            <div className="   d-flex align-items-center justify-content-center">
              <span> Don't have an account?</span>
              <Link to={"/signUp"} replace className=" url-colored btn p-1">
                Sign Up
              </Link>
            </div>

            <span>Or login With</span>

            <div className="d-flex   gap-2">
              <span
                className="py-2 btn border d-flex justify-content-center align-items-center"
                onClick={logInWithGoogleOrFacebook}
              >
                <FcGoogle size={25} />
                <span className="px-2">Google</span>
              </span>
              <span
                className="py-2 btn border d-flex justify-content-center align-items-center"
                onClick={logInWithGoogleOrFacebook}
              >
                <FaFacebook size={25} color="blue" />
                <span className="px-2">Facebook</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
