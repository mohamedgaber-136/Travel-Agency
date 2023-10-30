import React, { useState } from "react";
import img from "./assets/signup img.png"
import "./SignUp.css";
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
    <div className="signUpParent d-flex justify-content-center align-items-center ">
      <div className=" d-flex justify-content-center w-100 h-50 align-items-center gap-2">
        <div className="signUpContainer justify-content-center flex-column flex-md-row d-flex  align-items-center gap-2">
        <div
            className="imgContainer" style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              
            }}>
             </div>
         
         
         
         
         
          <form class="form">
            <p class="title">SignUp</p>
            <p class="message">Signup now and get full access to our app. </p>
            <div class="flex">
              <label>
                <input required="" placeholder="" type="text" class="input" />
                <span>Firstname</span>
              </label>

              <label>
                <input required="" placeholder="" type="text" class="input" />
                <span>Lastname</span>
              </label>
            </div>

            <label>
              <div class="flex">
                <input required="" placeholder="" type="email" class="input" />
                <span>Email</span>
                <label />
                <label>
                  <input
                    required=""
                    placeholder=""
                    type="Phone Number"
                    class="input"
                  />
                  <span>Phone Number</span>
                </label>
              </div>
            </label>

            <label>
              <input required="" placeholder="" type="password" class="input" />
              <span>Password</span>
            </label>
            <label>
              <input required="" placeholder="" type="password" class="input" />
              <span>Confirm password</span>
            </label>
            <div class="flex-row"></div>
            <div>
              <input type="checkbox" />
              <label>I agree to all the Terms and Privacy Policies </label>
            </div>
            <button class="Create account">Create account</button>
            <p class="signin">
              Already have an acount ? <a href="#">Signin</a>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
