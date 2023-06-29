import React, { useEffect, useState } from "react";
import './AppointmentDetail.css'
import { getOneAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { appointmentData } from "../appointmentSlice";
import { userData } from "../userSlice";
import { CustomCard } from "../../common/CustomCard/CustomCard";

export const AppointmentDetail = () => {

    let appointment = useSelector(appointmentData);
    let appointmentId = appointment.id;
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    const [detailAppointment, setDetailAppointment] = useState("")

    useEffect(() => {
        getOneAppointment(token, appointmentId)
            .then((res) => {
                setDetailAppointment(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div className="detailDesign">
            <CustomCard
                title={detailAppointment?.Treatment?.name}
                list1={new Date(detailAppointment?.date).toLocaleDateString()}
                list2={new Date(detailAppointment?.date).toLocaleTimeString()}
                list3={`Precio: ${detailAppointment?.price}€`}
                list4={`Doctor ${detailAppointment?.doctor?.name} ${detailAppointment?.doctor?.surname}`}
            ></CustomCard>
        </div>
    )
}