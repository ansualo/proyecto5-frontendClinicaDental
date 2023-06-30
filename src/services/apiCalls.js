import axios from "axios";

const URL = "http://localhost:3000"

export const loginUser = async (inputInfo) => {

    return await axios.post(`${URL}/auth/login`, inputInfo)
}

export const registerMe = async (inputInfo) => {

    return await axios.post(`${URL}/auth/register`, inputInfo)
}

// PROFILE

export const getProfile = async (token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let res = await axios.get(`${URL}/users/profile`, config)

    return res.data;
}

export const updateProfile = async (body, token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let res = await axios.put(`${URL}/users/profile`, body, config)
    return res.data
}

export const getAllProfiles = async (profilesInfo) => {

    return await axios.get(`${URL}/users/patients`, profilesInfo)
}

// CREATE APPOINTMENT

export const getAllDentists = async (allDentists) => {

    return await axios.get(`${URL}/users/dentists`, allDentists)
}

export const getAllTreatments = async (allTreatments) => {

    return await axios.get(`${URL}/treatments`, allTreatments)
}

// APPOINTMENTS

export const getAllAppointments = async (token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

   let res = await axios.get(`${URL}/appointments/all`, config)
   return res.data
}

export const getPatientAppointments = async (token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

   let res = await axios.get(`${URL}/appointments/patient`, config)
   return res.data
}

export const getOneAppointment = async (token, appointmentId) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

   let res = await axios.get(`${URL}/appointments/patient/${appointmentId}`, config)
   return res.data
}

export const createAppointment = async (token, newAppointment) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    let res = await axios.post(`${URL}/appointments`, newAppointment, config)
    return res
}

export const updateAppointment = async (token, updatedAppointmentId, editedAppointment) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    let res = await axios.put(`${URL}/appointments/${updatedAppointmentId}`, editedAppointment, config)
    return res
}

export const deleteAppointment = async (token, appointmentId) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return await axios.delete(`${URL}/appointments/${appointmentId}`, config)
}