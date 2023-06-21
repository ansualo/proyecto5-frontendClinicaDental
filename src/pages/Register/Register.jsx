import React, { useState } from "react";
import './Register.css'
import { InputForm } from "../../common/InputForm/InputForm";
import { Col, Row } from 'react-bootstrap';
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { registerMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

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

    const [registered, setRegistered] = useState("");

    const InputHandler = (e) => {
        setInputInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }


    const register = () => {
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
                                functionHandler={InputHandler}
                                onBlurFunction={() => { }}

                            />
                        </Col>
                        <Col sm={10} md={6}>
                            <InputForm
                                design={"inputDesign"}
                                label={"Apellidos"}
                                name={"surname"}
                                type={"text"}
                                functionHandler={InputHandler}
                                onBlurFunction={() => { }}
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
                                functionHandler={InputHandler}
                                onBlurFunction={() => { }}
                            />
                        </Col>
                        <Col sm={10} md={6}>
                            <InputForm
                                design={"inputDesign"}
                                label={"Número de teléfono"}
                                name={"phone"}
                                type={"text"}
                                placeholder={"+34"}
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
                                functionHandler={InputHandler}
                                onBlurFunction={() => { }}
                            />
                        </Col>
                        <Col sm={10} md={6}>
                            <InputForm
                                design={"inputDesign"}
                                label={"Contraseña"}
                                name={"password"}
                                type={"password"}
                                placeholder={"***********"}
                                functionHandler={InputHandler}
                                onBlurFunction={() => { }}
                            />
                        </Col>
                    </Row>
                    <FunctionButton name="Enviar" action={() => register()} />
                </div>
                )
            }

        </div>
    )
}