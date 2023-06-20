import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { About } from "../About/About";

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path='*' element={<Navigate to = '/' />}/>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/nosotros' element={<About />}/>
            </Routes>
        </>
    )
}