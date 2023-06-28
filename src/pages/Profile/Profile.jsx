import React, { useEffect, useState } from "react";
import './Profile.css'
import { Col, Row, Container } from "react-bootstrap";
import { getProfile, updateProfile } from "../../services/apiCalls";
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";
import { AppointmentsPatient } from "../AppointmentsPatient/AppointmentsPatient";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { InputForm } from "../../common/InputForm/InputForm";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";

export const Profile = () => {

    const [profileInfo, setProfileInfo] = useState({})
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    const editHandler = (body, token) => {
        updateProfile(body, token)
            .then(setEditing(false));
    }


    const InputHandler = (e) => {
        setBody((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(()=>{
        if(!editing){
            getProfile(token)
            .then((res)=> {setProfileInfo(res.data)})
        }

    }, [editing])

    return (
        <div className="profileDesign">
            <Container>
                <Row className="buttons">
                    <Col sm={10} md={3}>
                        <NavigateButton name="Ver todas mis citas" path={'/usuario/citas'}></NavigateButton>
                    </Col>
                    <Col sm={10} md={3}>
                        <NavigateButton name="PEDIR CITA" path={'/pedircita'}></NavigateButton>
                    </Col>


                    {editing
                        ?(
                            <Col sm={10} md={3}>
                            <FunctionButton name="Confirmar" action={() => {editHandler(body, token)}}></FunctionButton>
                            </Col>
                        )
                        :(  <Col sm={10} md={3}>
                            <FunctionButton name="Modificar perfil" action={() => {setEditing(true)}}></FunctionButton>
                            </Col>
                        )
                    }
                </Row>
                <Row className="userProfile">
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Nombre</div>
                        <div className="profileInfo">{profileInfo.name}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Apellidos</div>
                        <div className="profileInfo">{profileInfo.surname}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Fecha de nacimiento</div>
                        <div className="profileInfo">{profileInfo.date_of_birth}</div>
                    </Col>

                    {editing
                        ? (
                            <>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Número de teléfono</div>
                                <InputForm             
                                    design= {"profileInfo inputMargin"} 
                                    name={"phone"}
                                    type={"text"} 
                                    placeholder={profileInfo.phone} 
                                    maxLength={15}
                                    functionHandler={InputHandler}
                                    onBlurFunction={()=>{ }}
                                />
                            </Col>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Dirección</div>
                                <InputForm             
                                    design= {"profileInfo inputMargin"} 
                                    name={"address"}
                                    type={"text"} 
                                    placeholder={profileInfo.address} 
                                    maxLength={100}
                                    functionHandler={InputHandler}
                                    onBlurFunction={()=>{ }}
                                />
                            </Col>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Email</div>
                                <InputForm             
                                    design= {"profileInfo inputMargin"} 
                                    name={"address"}
                                    type={"email"} 
                                    placeholder={profileInfo.email} 
                                    maxLength={40}
                                    functionHandler={InputHandler}
                                    onBlurFunction={()=>{ }}
                                />
                            </Col>
                            </>
                        )
                        : (
                            <>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Número de teléfono</div>
                                <div className="profileInfo">{profileInfo.phone}</div>
                            </Col>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Dirección</div>
                                <div className="profileInfo">{profileInfo.address}</div>
                            </Col>
                            <Col sm={10} md={6}>
                                <div className="profileLabel">Email</div>
                                <div className="profileInfo">{profileInfo.email}</div>
                            </Col>
                            </>
                        )
                    }

                </Row>
            </Container>
        </div>
    )



}