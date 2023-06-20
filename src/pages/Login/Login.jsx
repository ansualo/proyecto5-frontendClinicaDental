import React, { useState } from 'react'
// import jwt_decode from "jwt-decode";
import './Login.css'
import { InputForm } from '../../common/InputForm/InputForm'
import { Col, Row } from 'react-bootstrap';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { checkError } from '../../services/useful';
// import { loginMe } from '../../services/apiCalls';

export const Login = () => {

    const [inputInfo, setInputInfo] = useState({
        email:"",
        password:""
    })

    const [inputError, setInputError] = useState({
        emailError:"",
        passwordError:""
    })

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

    // const logMe = () => {
    //     loginMe(inputInfo)
    //         .then((resultado) => {
    //             let decodificado = jwt_decode(resultado.data.token);
    //             console.log(decodificado)
    //         })
    //         .catch((error) => console.log(error))
    // }

    return(
        <div className="loginDesign">
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
                <CustomButton name="Enviar"/>
                {/* <div onClick={() => logMe()} className="botonLogin">
                    Login me!
                </div> */}

            </div>
        </div>
    )
}