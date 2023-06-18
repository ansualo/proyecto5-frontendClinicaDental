import React, { useState } from 'react'
import './Login.css'
import { InputForm } from '../../common/InputForm/InputForm'

export const Login = () => {

    const [inputInfo, setInputInfo] = useState({
        email:"",
        password:""
    })

    const InputHandler = (e) => {
        setInputInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div class="loginDesign">LOGIN
            <div className="formDesign">
                <InputForm
                    label= {"Email"}
                    name={"email"}
                    type={"email"}
                    placeholder={"Insert your email"} 
                    functionHandler={InputHandler}
                />
                <InputForm 
                    label= {"Password"}
                    name={"password"}
                    type={"password"}
                    placeholder={"Insert your password"} 
                    functionHandler={InputHandler}
                />
            </div>
        
        </div>
    )
}