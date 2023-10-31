import React, { useState } from "react";
import img from "../../assets/signupImg.png";
import "./SignUp.css";
import { Helmet } from "react-helmet";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    //if New user can sign
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
      </Helmet>
      <div className="signUpParent d-flex justify-content-center align-items-center ">
        <div className=" d-flex justify-content-center w-100 h-50 align-items-center gap-2">
          <div className="signUpContainer justify-content-center flex-column flex-md-row d-flex  align-items-center gap-2">
            <div
              className="imgContainer"
              style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            <form class="form shadow">
              <h2 class="title m-0">SignUp</h2>
              <p class="message">Signup now and get full access to our app. </p>
              <div class="flex">
                <label>
                  <input
                    required=""
                    placeholder="Firstname"
                    type="text"
                    class="input"
                  />
                </label>

                <label>
                  <input
                    required=""
                    placeholder="Lastname"
                    type="text"
                    class="input"
                  />
                </label>
              </div>

              <label>
                <div class="flex">
                  <input
                    required=""
                    placeholder="Email"
                    type="email"
                    class="input"
                  />
                  <label />
                  <label>
                    <input
                      required=""
                      placeholder="Phone Number"
                      type="Phone Number"
                      class="input"
                    />
                  </label>
                </div>
              </label>

              <label>
                <input
                  required=""
                  placeholder="Password"
                  type="password"
                  class="input"
                />
              </label>
              <label>
                <input
                  required=""
                  placeholder="Confirm Password"
                  type="password"
                  class="input"
                />
              </label>
              <div class="flex-row"></div>
              <div>
                <input type="checkbox" />
                <label className="px-1">
                  I agree to all the Terms and Privacy Policies{" "}
                </label>
              </div>
              <button class="submit ">Create account</button>
              <p class="signin">
                Already have an acount ? <a href="#">Signin</a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
