import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { About } from "../About/About";
import { Profile } from "../Profile/Profile";
import { AllProfiles } from "../AllProfiles/AllProfiles";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { AppointmentsPatient } from "../AppointmentsPatient/AppointmentsPatient";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";
import { AllAppointments } from "../AllAppointments/AllAppointments";

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
                <Route path='/modificarcita' element={<AppointmentForm />}/>
                <Route path='/citas' element={<AppointmentsPatient />}/>
                <Route path='/citas/detalle' element={<AppointmentDetail />}/>
                <Route path='/citas/all' element={<AllAppointments />}/>
            </Routes>
        </>
    )
}