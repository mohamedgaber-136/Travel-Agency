import React from 'react'
import img from "./assets/signup img.png"
import SignUpPage from './SignUp'
const SignComponent = () => {
  return (
    <div className='signUpComponent'>
       <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
            <SignUpPage />
                </div>
                <div className='col-lg-6 signUpImageContainer'>
                    <img src={img} className='loginImage'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SignComponent