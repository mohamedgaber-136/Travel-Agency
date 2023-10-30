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
    //   setPasswordType("text");
    // } else {
    //   setPasswordType("password");
    // }
  }

  return (
    <div className="loginParent d-flex justify-content-center align-items-center ">
      <div className=" d-flex justify-content-center w-100 h-50 align-items-center gap-2">
        <div className=" signInContainer  justify-content-center flex-column flex-md-row d-flex  align-items-center gap-2">
          <div
            className="imgContainer"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="loginForm form h-100 ">
            <div className="align-self-start d-flex flex-column py-2">
              <h2 className="m-0">Login</h2>
              <span>Login to access your Golobe account</span>
            </div>
            <form class="form">
              {/* <div class="input-group  w-0 m-0">
  <input type="text" class="form-control" placeholder="input your Password"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div> */}
              <label>
                <input
                  required=""
                  placeholder="Email"
                  type="email"
                  class="input"
                />
              </label>
              <label className=" input-group d-flex">
                <input
                  type={isHiddenPassword ? "password" : "text"}
                  class="input form-control"
                  placeholder="Enter your Password"
                />

                <span
                  className="border rounded-3 px-2 py-1"
                  onClick={handlePasswordType}
                >
                  {isHiddenPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </span>
              </label>
              <div class="flex-row">
                <div>
                  <input type="checkbox" />
                  <label>Remember me </label>
                </div>
                <span class="span">Forgot password?</span>
              </div>
              <button class="submit">Sign In</button>
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
