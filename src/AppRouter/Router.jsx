import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from '../Pages/SignUp/SignUp'
import LoginPage from '../Pages/Login/Login'

const AppRouter = () => {
    return (
        <BrowserRouter> 
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='signUp' element={<SignUpPage/>}/>
        </Routes>
        </BrowserRouter> 
    )
}

export default AppRouter