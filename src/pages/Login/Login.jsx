import React, { useState } from 'react'
import jwt_decode from "jwt-decode";
import './Login.css'
import { InputForm } from '../../common/InputForm/InputForm'
import { Col, Row } from 'react-bootstrap';
import { checkError } from '../../services/useful';
import { loginMe } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { FunctionButton } from '../../common/FunctionButton/FunctionButton';

export const Login = () => {

    const navigate = useNavigate();

    const [inputInfo, setInputInfo] = useState({
        email:"",
        password:""
    })

    const [inputError, setInputError] = useState({
        emailError:"",
        passwordError:""
    })

    const [welcome, setWelcome] = useState("");

    const InputHandler = (e) => {
        setInputInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const inputCheck = (e) =>{

        let messageError = checkError(e.target.name, e.target.value);

        setInputError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: messageError
        }))
    }

    const logMe = () => {
        loginMe(inputInfo)
            .then((resultado) => {
                let decodificado = jwt_decode(resultado.data.token);
                console.log(decodificado)

                setTimeout(() => {
                    navigate('/');
                }, 3500)

                setWelcome(`Nos alegra verte de nuevo ${decodificado}`)
            })
            .catch((error) => console.log(error))
    }

    return(
        <div className="loginDesign">
            {welcome !== "" 
                ? (<div>{welcome}</div>)
                : (
                    <div className="formDesign">
                    <Row>
                        <Col sm={10} md={12}>
                            <InputForm
                                design={inputError.emailError === "" ? "inputDesign" : "inputDesign errorInput"}
                                label= {"Email"}
                                name={"email"}
                                type={"email"}
                                placeholder={"ejemplo@ejemplo.com"} 
                                functionHandler={InputHandler}
                                onBlurFunction={inputCheck}
                            />
                            <div className="errorInput">{inputError.emailError}</div>
                        </Col>
                        <Col sm={10} md={12}>
                            <InputForm 
                                design={inputError.passwordError === "" ? "inputDesign" : "inputDesign errorInput"}
                                label= {"Contraseña"}
                                name={"password"}
                                type={"password"}
                                placeholder={"***********"} 
                                functionHandler={InputHandler}
                                onBlurFunction={inputCheck}
                            />
                            <div className="errorInput">{inputError.passwordError}</div>
                        </Col>
                    </Row>
                    <FunctionButton name="Enviar" action={()=>logMe()} />
                </div>
            )}
        </div>
    );
};
