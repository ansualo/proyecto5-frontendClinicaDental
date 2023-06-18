import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div class="headerDesign">
            <div className="linkDesign" onClick={()=> navigate('/')}>HOME</div>
            <div className="linkDesign" onClick={()=> navigate('/login')}>LOGIN</div>
            <div className="linkDesign" onClick={()=> navigate('/register')}>REGISTER</div>
        </div>
    )
}