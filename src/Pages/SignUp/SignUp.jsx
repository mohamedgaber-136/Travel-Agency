import React, { useState } from 'react';
import "./SignUp.css";
function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
//if New user can sign
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form class="form">
    <p class="title">SignUp</p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
      <div class="flex">
        <input required="" placeholder="" type="email" class="input"/>
        <span>Email</span>
        <label/>
        <label>
        <input required="" placeholder="" type="Phone Number" class="input"/>
        <span>Phone Number</span>
        </label>
        </div>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"/>
        <span>Confirm password</span>
    </label>
    <div class="flex-row"></div>
    <div>
      <input type="checkbox"/>
      <label>I agree to all the Terms and Privacy Policies </label>
      </div>
    <button class="Create account">Create account</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
  );
}

export default SignUpPage;