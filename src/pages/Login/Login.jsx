import React, { useState } from 'react'
import './Login.css'
import { InputForm } from '../../common/InputForm/InputForm'
import { Col, Row } from 'react-bootstrap';
import { CustomButton } from '../../common/CustomButton/CustomButton';

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
        <div class="loginDesign">
            <div className="formDesign">
                <Row>
                    <Col sm={10} md={12}>
                        <InputForm
                            label= {"Email"}
                            name={"email"}
                            type={"email"}
                            placeholder={"ejemplo@ejemplo.com"} 
                            functionHandler={InputHandler}
                        />
                    </Col>
                    <Col sm={10} md={12}>
                        <InputForm 
                            label= {"Contraseña"}
                            name={"password"}
                            type={"password"}
                            placeholder={"***********"} 
                            functionHandler={InputHandler}
                        />
                    </Col>
                </Row>
                <CustomButton name="Enviar"/>
            </div>
        </div>
    )
}