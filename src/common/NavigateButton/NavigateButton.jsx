import React from "react";
import './NavigateButton.css'
import { useNavigate } from 'react-router-dom';

export const NavigateButton = ({name, path}) => {

    const navigate = useNavigate();
    return (
        <div className="buttonDesign" onClick={()=>navigate(path)}>{name}</div>
    )
}