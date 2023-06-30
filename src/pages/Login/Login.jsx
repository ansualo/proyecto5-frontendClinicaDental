import React, { useState } from 'react'
import jwt_decode from "jwt-decode";
import './Login.css'
import { InputForm } from '../../common/InputForm/InputForm'
import { Col, Row, Container } from 'react-bootstrap';
import { checkError } from '../../services/useful';
import { loginUser } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { FunctionButton } from '../../common/FunctionButton/FunctionButton';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [inputInfo, setInputInfo] = useState({
        email: "",
        password: ""
    })

    const [inputError, setInputError] = useState({
        emailError: "",
        passwordError: ""
    })

    const [welcome, setWelcome] = useState("");

    const submitHandler = (e, inputInfo) => {
        e.preventDefault()
        loginUser(inputInfo)
            .then((res) => {
                let decoded = jwt_decode(res.data.token)
                dispatch(
                    login({
                        token: res,
                        userId: decoded.userId,
                        roleId: decoded.roleId
                    })
                )

                setTimeout(() => {
                    navigate('/usuario');
                }, 1000)

                setWelcome(`Nos alegra verte de nuevo`)
            })
    }

    return (
        <div className="loginDesign">
            <Container className="d-flex justify-content-center">
                {welcome !== ""
                    ? (<div>{welcome}</div>)
                    : (
                        <div className="formDesign">
                            <Row>
                                <Col sm={10} md={6}>
                                    <InputForm
                                        design={inputError.emailError === "" ? "inputDesign" : "inputDesign errorInput"}
                                        label={"Email"}
                                        name={"email"}
                                        type={"email"}
                                        placeholder={"ejemplo@ejemplo.com"}
                                        maxLength={20}
                                        state={setInputInfo}
                                        errorState={setInputError}
                                    />
                                    <div className="errorInput">{inputError.emailError}</div>
                                </Col>
                                <Col sm={10} md={6}>
                                    <InputForm
                                        design={inputError.passwordError === "" ? "inputDesign" : "inputDesign errorInput"}
                                        label={"Contraseña"}
                                        name={"password"}
                                        type={"password"}
                                        placeholder={"***********"}
                                        maxLength={20}
                                        state={setInputInfo}
                                        errorState={setInputError}
                                    />
                                    <div className="errorInput">{inputError.passwordError}</div>
                                </Col>
                            </Row>
                            <FunctionButton name="Enviar" action={(e) => submitHandler(e, inputInfo)} />
                        </div>
                    )}
            </Container>
            <div className="registerOption" onClick={()=>navigate('/register')} >Si eres un nuevo paciente registrate aquí</div>
        </div>
    );
};
