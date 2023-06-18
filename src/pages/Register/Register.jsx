import React, { useState } from "react";
import './Register.css'
import { InputForm } from "../../common/InputForm/InputForm";
import { Col, Row } from 'react-bootstrap';

export const Register = () => {

    const [inputInfo, setInputInfo] = useState({
        name:"",
        surname:"",
        email: "",
        password: ""
    })

    const InputHandler = (e) => {

        setInputInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="registerDesign">

            {/* {<pre>{JSON.stringify(inputInfo, null,2)}</pre>} */}

            <div className="formDesign">
                <Row>
                    <Col sm={10} md={6}>
                        <InputForm 
                            label= {"Nombre"}
                            name={"name"}
                            type={"text"}
                            functionHandler={InputHandler}
                        />
                    </Col>
                    <Col sm={10} md={6}>
                        <InputForm 
                            label= {"Apellidos"}
                            name={"surname"}
                            type={"text"}
                            functionHandler={InputHandler}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} md={6}>
                        <InputForm 
                            label= {"Fecha de nacimiento"}
                            name={"birth"}
                            type={"text"}
                            placeholder={"0000-00-00"} 
                            functionHandler={InputHandler}
                        />
                    </Col>
                    <Col sm={10} md={6}>
                        <InputForm 
                            label= {"Número de teléfono"}
                            name={"phone"}
                            type={"text"}
                            placeholder={"+34"} 
                            functionHandler={InputHandler}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} md={12}>
                        <InputForm 
                            label= {"Dirección"}
                            name={"address"}
                            type={"text"}
                            functionHandler={InputHandler}
                        />
                    </Col>
                    <Col sm={10} md={6}>
                        <InputForm
                            label= {"Email"}
                            name={"email"}
                            type={"email"}
                            placeholder={"ejemplo@ejemplo.com"}
                            functionHandler={InputHandler}
                        />
                    </Col>
                    <Col sm={10} md={6}>
                        <InputForm 
                            label= {"Contraseña"}
                            name={"password"}
                            type={"password"}
                            placeholder={"***********"}
                            functionHandler={InputHandler}
                        />
                    </Col>
                </Row>

            </div>

        </div>
    )
}