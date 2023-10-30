import React, { useEffect, useState } from "react";
import img from "../../assets/photoLogin.png";

import "./Login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { authbase } from "../../Firebase/FirebaseInit";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("email:", email);
    console.log("Password:", password);
  };

  const [isHiddenPassword, setIsHiddenPassword] = useState("password");
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  function handlePasswordType() {
    setIsHiddenPassword(!isHiddenPassword);
  }

  const [credential, setCredential] = useState({});
  useEffect(() => {
    console.log(userObject, "user");
    console.log(credential, "user");
  }, [userObject, credential]);

  function userSignIn(event) {
    event.preventDefault();

    signInWithEmailAndPassword(authbase, userObject.email, userObject.password)
      .then((cred) => {
        console.log(cred, "sign in");
        setCredential(cred);
        // let x = { ...cred, phoneNumber: "+123456" };
        // console.log(x, "x");
        // authbase.currentUser = cred.user;
        // add user from storage
      })
      .catch((error) => console.log(error, "error"));

    console.log("ajsgs");
  }

  return (
    <div className="loginParent d-flex justify-content-center align-items-center ">
      <div className=" d-flex justify-content-center w-100 h-50 align-items-center gap-2">
        <div className=" signInContainer  justify-content-center flex-column flex-md-row d-flex  align-items-center gap-2">
          <div
            className="imgContainer  "
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <button
            onClick={() => {
              console.log(authbase.currentUser, "test");
              authbase.currentUser.uid = "0";
            }}
          >
            test
          </button>
          <div className="loginForm h-100  ">
            <div className="align-self-start d-flex flex-column py-2">
              <h2 className="m-0">Login</h2>
              <span>Login to access your Golobe account</span>
            </div>
            <form class="form" onSubmit={userSignIn}>
              <div class="flex-column">
                <label>Email </label>
              </div>
              <div class="inputForm">
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your Email"
                  onChange={(event) =>
                    setUserObject({ ...userObject, email: event.target.value })
                  }
                />
              </div>

              <div class="flex-column">
                <label>Password </label>
              </div>
              <div class="inputForm">
                <input
                  type={isHiddenPassword ? "password" : "text"}
                  class="input"
                  placeholder="Enter your Password"
                  onChange={(event) =>
                    setUserObject({
                      ...userObject,
                      password: event.target.value,
                    })
                  }
                />
                <span
                  className="border border-dark px-2 py-1"
                  onClick={handlePasswordType}
                >
                  {isHiddenPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </div>

              <div class="flex-row">
                <div>
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      setUserObject({
                        ...userObject,
                        rememberMe: !userObject.rememberMe,
                      })
                    }
                  />
                  <label>Remember me </label>
                </div>
                <span class="span">Forgot password?</span>
              </div>
              <button class="button-submit">Sign In</button>
              <p class="p">
                Don't have an account? <span class="span">Sign Up</span>
              </p>
              <p class="p line">Or login With</p>

              <div class="flex-row">
                <button class="btn google">Google</button>
                <button class="btn apple">Apple</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
