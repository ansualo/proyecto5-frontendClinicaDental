import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { About } from "../About/About";
import { Profile } from "../Profile/Profile";
import { AllProfiles } from "../AllProfiles/AllProfiles";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to = '/' />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/nosotros' element={<About />}/>
                <Route path='/usuario' element={<Profile />}/>
                <Route path='/usuario/all' element={<AllProfiles />}/>
                <Route path='/pedircita' element={<AppointmentForm />}/>
            </Routes>
        </>
    )
}