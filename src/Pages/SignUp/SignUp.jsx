import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/signupImg.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "../Login/Login.css";
import "./SignUp.css";
import { Helmet } from "react-helmet";
import { searchContext } from "../../store/searchStore";
import { addDoc, getDocs, query, where } from "@firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { accountAvatar, accountBg } from "../../assets/images";

function SignUpPage() {
  const navigate = useNavigate();

  const { setCurrentUserObj, usersReference, setAuthorized } =
    useContext(searchContext);
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState("");
  const [checkLicenes, setCheckLicenes] = useState(false);
  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    profileImg: accountAvatar,
    coverImg: accountBg,
    birthDate: "",
    bookinds: [],
    favourites: [],
    cards: [],
  });

  let interv;

  useEffect(() => {
    console.log(submitEnabled, "submit");

    if (
      userObject.firstName === "" ||
      userObject.lastName === "" ||
      userObject.email === "" ||
      userObject.phone === "" ||
      userObject.password === "" ||
      userObject.confirmPassword === ""
    ) {
      setErrorMessage("Please Enter All Required Data");
      setSubmitEnabled(false);
    } else if (
      userObject.password.length < 6 ||
      userObject.password !== userObject.confirmPassword ||
      !userObject.email.match(/^[a-zA-Z]+[a-zA-Z0-9-_.]*@[a-z]+\.[a-z]+/) ||
      !userObject.firstName.match(/^[a-zA-Z]{3,}/) ||
      !userObject.lastName.match(/^[a-zA-Z]{3,}/) ||
      !userObject.phone.match(/^[0-9]{9,}/)
    ) {
      setErrorMessage("");
      setSubmitEnabled(false);
    } else if (!checkLicenes) {
      setErrorMessage("Make Sure To Accept The Licenes");
      setSubmitEnabled(false);
    } else {
      setErrorMessage("");
      setSubmitEnabled(true);
    }
  }, [userObject, checkLicenes, submitEnabled]);

  function userSignUp(event) {
    event.preventDefault();

    if (submitEnabled) {
      console.log("submit");

      const que = query(
        usersReference,
        where("email", "==", userObject.email) ||
          where("phone", "==", userObject.phone)
      );
      getDocs(que).then((snapshot) => {
        if (snapshot.docs.length > 0) {
          setErrorMessage("This Email or Phone Is Already In Use");
        } else {
          setAuthorized(true);
          swal({
            icon: "success",
            button: false,
            closeOnClickOutside: false,
            timer: 2000,
          }).then(() => navigate("/"));
          addDoc(usersReference, userObject).then((snapshot) => {
            console.log(snapshot, "djfhsdj");
            // sessionStorage.setItem("currentUser", snapshot.id);
            localStorage.setItem("currentUser", snapshot.id);
            setCurrentUserObj({ ...userObject, id: snapshot.id });
          });
        }
      });
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(interv);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
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
            className="logForm border shadow rounded-4 d-flex flex-column justify-content-center align-items-center gap-2 h-100 bg-light"
            onSubmit={userSignUp}
          >
            <div className="align-self-start d-flex flex-column p-2 ">
              <h2 className="m-0">Signup</h2>
              <span>Signup now and get full access to our app.</span>
            </div>

            <div className="d-flex w-100 gap-2">
              <input
                required
                placeholder="Firstname"
                type="text"
                className="form-control"
                title="First Name Can Not Be Less Than 3 And Only Charachters"
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
                className="form-control"
                title="Last Name Can Not Be Less Than 3 And Only Charachters"
                onChange={(event) =>
                  setUserObject({
                    ...userObject,
                    lastName: event.target.value,
                  })
                }
              />
            </div>

            <div className="w-100">
              <input
                type="email"
                className="form-control "
                placeholder="Enter your Email"
                title="Email Should Include @"
                required
                onChange={(event) => {
                  setUserObject({ ...userObject, email: event.target.value });

                  setErrors({
                    ...errors,
                    emailError: !event.target.value.match(
                      /^[a-zA-Z]+[a-zA-Z0-9-_.]*@[a-z]+\.[a-z]+/
                    )
                      ? "This Email Is Not Valid"
                      : "",
                  });
                }}
              />
              {errors?.emailError ? (
                <span className=" ps-2 text-danger">{errors?.emailError}</span>
              ) : null}
            </div>

            <input
              type="text"
              className="form-control "
              placeholder="Enter your Phone"
              title="Phone Can Not Be Less Than 9"
              required
              onChange={(event) =>
                setUserObject({ ...userObject, phone: event.target.value })
              }
            />

            <div className="w-100">
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

                    setErrors({
                      ...errors,
                      confirmError:
                        event.target.value.length < 6
                          ? "Passwords Should Be 6 Characters At Least"
                          : userObject.confirmPassword !== event.target.value
                          ? "Password Does Not Match"
                          : "",
                    });
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
              {/* {errors?.passwordError ? (
                <span className="fs-6 ps-2 text-danger">
                  {errors?.passwordError}
                </span>
              ) : null} */}
            </div>

            <div className="w-100">
              <div className="input-group ">
                <input
                  type={isHiddenPassword ? "password" : "text"}
                  className="form-control"
                  placeholder="Confirm your Password"
                  required
                  onChange={(event) => {
                    setUserObject({
                      ...userObject,
                      confirmPassword: event.target.value,
                    });

                    setErrors({
                      ...errors,
                      confirmError:
                        userObject.password !== event.target.value
                          ? "Passwords Does Not Match"
                          : "",
                    });
                  }}
                />
                {/* <div className="input-group-append">
                  <span
                    className=" input-group-text  h-100"
                    onClick={handlePasswordConfirmType}
                  >
                    {isHiddenPassword.confirm ? (
                      <BsEyeSlashFill size={23} />
                    ) : (
                      <BsEyeFill size={23} />
                    )}
                  </span>
                </div> */}
              </div>
              {errors?.confirmError ? (
                <span className="fs-6 ps-2 text-danger">
                  {errors?.confirmError}
                </span>
              ) : null}
            </div>

            <div className="align-self-start">
              <input
                type="checkbox"
                className="form-check-input "
                onChange={(event) => {
                  setCheckLicenes(event.target.checked);
                  setErrors({
                    ...errors,
                    licenesError: event.target.checked
                      ? ""
                      : "Make Sure To Accept The Licenes",
                  });
                }}
              />
              <label className="px-1">
                I agree to all the Terms and Privacy Policies
              </label>
            </div>

            <div className="d-flex flex-column w-75">
              <button
                className={submitEnabled ? "submitBtn" : "submitBtn-disabled"}
                onClick={userSignUp}
              >
                Create Account
              </button>
              <span className="fs-6 ps-2 text-danger">{errorMessage}</span>
            </div>

            <div className="   d-flex align-items-center justify-content-center">
              <span> Already have an acount?</span>
              <Link to={"/login"} replace className=" url-colored btn p-1">
                Sign In
              </Link>
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

/* <button
            onClick={() => {
              // Create a root reference
              const storage = getStorage();

              // Create a reference to 'mountains.jpg'
              const mountainsRef = ref(storage, "loginImg.png");

              // Create a reference to 'images/mountains.jpg'
              // const mountainImagesRef = ref(
              //   storage,
              //   "loginImg.png"
              // );

              // console.log(mountainImagesRef, "data");

              // While the file names are the same, the references point to different files
              // mountainsRef.name === mountainImagesRef.name;           // true
              // mountainsRef.fullPath === mountainImagesRef.fullPath;   // false
            }}
          >
            Upload image
          </button> */
