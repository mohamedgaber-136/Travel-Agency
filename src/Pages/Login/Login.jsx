import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/loginImg.png";
import "./Login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { getDocs, query, where } from "firebase/firestore";
import { searchContext } from "../../store/searchStore";

function LoginPage() {
  const { usersReference, setCurrentUserObj } = useContext(searchContext);

  const navigate = useNavigate();

  const [isHiddenPassword, setIsHiddenPassword] = useState("password");
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    if (userObject.email === "" || userObject.password === "") {
      setSubmitEnabled(false);
      setErrorMessage("Make Sure To Enter Email and Password");
    } else {
      setSubmitEnabled(true);
      setErrorMessage("");
    }
  }, [userObject]);

  function userSignIn(event) {
    event.preventDefault();

    const que = query(usersReference, where("email", "==", userObject.email));
    getDocs(que).then((snapshot) => {
      console.log(snapshot, "login");
      if (snapshot.docs.length > 0) {
        const currentUser = snapshot.docs[0].data();
        console.log(currentUser.password, "pass");
        if (currentUser.password === userObject.password) {
          setCurrentUserObj({ ...currentUser, id: snapshot.docs[0].id });
          sessionStorage.setItem("currentUser", snapshot.docs[0].id);
          navigate("/");
        } else {
          setErrorMessage("Password is Incorrect");
        }
      } else {
        setErrorMessage("This Email Does Not Have Account");
      }
    });

    console.log("ajsgs");
  }

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

            {/* <div className="d-flex justify-content-between align-items-center w-100 ">
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
            </div> */}

            <div className="d-flex flex-column w-75 py-2">
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
              <Link to={"signUp"} replace className=" url-colored btn p-1">
                Sign Up
              </Link>
            </div>

            <span>Or login With</span>

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
