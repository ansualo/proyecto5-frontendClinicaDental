import React, { useState } from "react";
import './Register.css'
import { InputForm } from "../../common/InputForm/InputForm";
import { Col, Row } from 'react-bootstrap';
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { registerMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { checkError } from "../../services/useful";

export const Register = () => {

    const navigate = useNavigate();

    const [inputInfo, setInputInfo] = useState({
        name: "",
        surname: "",
        date_of_birth: "",
        phone: "",
        address: "",
        email: "",
        password: ""
    })

    const [inputError, setInputError] = useState({
        nameError: "",
        surnameError: "",
        date_of_birthError: "",
        phoneError: "",
        addressError: "",
        emailError: "",
        passwordError: ""
    })

    const [registered, setRegistered] = useState("");

    const InputHandler = (e) => {
        setInputInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

        console.log(inputInfo.phone)
    }

    const InputCheck = (e) => {

        let messageError = checkError(e.target.name, e.target.value);

        setInputError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: messageError
        }))

    }

    const register = () => {

        const { name, surname, date_of_birth, phone, address, email, password } = inputInfo;

        if (!name || !surname || !date_of_birth || !phone || !address || !email || !password || 
            name.trim() === '' || surname.trim() === '' || date_of_birth.trim() === '' || 
            phone.trim() === '' || address.trim() === '' || email.trim() === '' || password.trim() === '' ||
            inputError.date_of_birthError !== "" || inputError.emailError !== "" || inputError.passwordError !== "") {
        return

        } else {

            registerMe(inputInfo)
            .then((resultado) => {
                console.log(resultado.data.message) 

                setTimeout(() => {
                    navigate('/');
                }, 4000)

                setRegistered('Te has registrado correctamente')
            })
            .catch((error) => console.log(error))
         }
    }

        return (
            <div className="registerDesign">
                {registered !== ""
                    ? (<div className="confirmed">{registered}</div>)
                    : (<div className="formDesign">
                        <Row>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Nombre"}
                                    name={"name"}
                                    type={"text"}
                                    maxLength={40}
                                    functionHandler={InputHandler}
                                    onBlurFunction={InputCheck}
                                />
                            </Col>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Apellidos"}
                                    name={"surname"}
                                    type={"text"}
                                    maxLength={40}
                                    functionHandler={InputHandler}
                                    onBlurFunction={InputCheck}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Fecha de nacimiento"}
                                    name={"date_of_birth"}
                                    type={"text"}
                                    placeholder={"0000-00-00"}
                                    maxLength={10}
                                    functionHandler={InputHandler}
                                    onBlurFunction={InputCheck}
                                />
                                <div className="errorInput">{inputError.date_of_birthError}</div>
                            </Col>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Número de teléfono"}
                                    name={"phone"}
                                    type={"text"}
                                    placeholder={"+34"}
                                    maxLength={15}
                                    functionHandler={InputHandler}
                                    onBlurFunction={() => { }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} md={12}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Dirección"}
                                    name={"address"}
                                    type={"text"}
                                    maxLength={100}
                                    functionHandler={InputHandler}
                                    onBlurFunction={() => { }}
                                />
                            </Col>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Email"}
                                    name={"email"}
                                    type={"email"}
                                    placeholder={"ejemplo@ejemplo.com"}
                                    maxLength={40}
                                    functionHandler={InputHandler}
                                    onBlurFunction={InputCheck}
                                />
                                <div className="errorInput">{inputError.emailError}</div>
                            </Col>
                            <Col sm={10} md={6}>
                                <InputForm
                                    design={"inputDesign"}
                                    label={"Contraseña"}
                                    name={"password"}
                                    type={"password"}
                                    placeholder={"***********"}
                                    maxLength={14}
                                    functionHandler={InputHandler}
                                    onBlurFunction={InputCheck}
                                />
                                <div className="errorInput">{inputError.passwordError}</div>
                            </Col>
                        </Row>
                        <FunctionButton name="Enviar" action={() => register()} />
                    </div>
                    )
                }
            </div>
        )
    }