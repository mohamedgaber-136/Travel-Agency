import React, { useState } from "react";
import img from "../../assets/photoLogin.png";

import "./Login.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("email:", email);
    console.log("Password:", password);
  };

  const [isHiddenPassword, setIsHiddenPassword] = useState("password");

  function handlePasswordType() {
    setIsHiddenPassword(!isHiddenPassword);

    // if (passwordType === "password") {
    //   setPassordType("text");
    // } else {
    //   setPassordType("password");
    // }
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
          <div className="loginForm h-100  ">
            <div className="align-self-start d-flex flex-column py-2">
              <h2 className="m-0">Login</h2>
              <span>Login to access your Golobe account</span>
            </div>
            <form class="form">
              <div class="flex-column">
                <label>Email </label>
              </div>
              <div class="inputForm">
                <input
                  type="text"
                  class="input"
                  placeholder="Enter your Email"
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
                  <input type="checkbox" />
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
