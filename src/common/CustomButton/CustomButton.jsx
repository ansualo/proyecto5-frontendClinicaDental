import React from "react";
import './CustomButton.css'
import { useNavigate } from 'react-router-dom';

export const CustomButton = ({name, path}) => {

    const navigate = useNavigate();
    return (
        <div className="buttonDesign" onClick={()=>navigate(path)}>{name}</div>
    )
}