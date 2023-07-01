import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { About } from "../About/About";
import { Profile } from "../Profile/Profile";
import { AllPatients } from "../AllPatients/AllPatients";
import { AllDentists } from "../AllDentists/AllDentists";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { AppointmentsPatient } from "../AppointmentsPatient/AppointmentsPatient";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";
import { AllAppointments } from "../AllAppointments/AllAppointments";
import { AppointmentsDentists } from "../AppointmentsDentist/AppointmentsDentist";

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to='/' />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/nosotros' element={<About />} />
                <Route path='/usuario' element={<Profile />} />
                <Route path='/usuario/all' element={<AllPatients />} />
                <Route path='/usuario/dentista' element={<AllDentists/>} />
                <Route path='/pedircita' element={<AppointmentForm />} />
                <Route path='/modificarcita' element={<AppointmentForm />} />
                <Route path='/citas' element={<AppointmentsPatient />} />
                <Route path='/citas/detalle' element={<AppointmentDetail />} />
                <Route path='/citas/dentista' element={<AppointmentsDentists />} />
                <Route path='/citas/all' element={<AllAppointments />} />
            </Routes>
        </>
    )
}