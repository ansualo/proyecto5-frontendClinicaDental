import axios from "axios";

export const loginUser = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/login', inputInfo)
}

export const registerMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/register', inputInfo)
}

export const getProfile = async (token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let res = await axios.get('http://localhost:3000/users/profile', config)

    return res.data;
}

export const updateProfile = async (body, token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    let res = await axios.put('http://localhost:3000/users/profile', body, config)
    return res.data
}

export const getAllProfiles = async (profilesInfo) => {

    return await axios.get('http://localhost:3000/users/patients', profilesInfo)
}

export const getAllDentists = async (allDentists) => {

    return await axios.get('http://localhost:3000/users/dentists', allDentists)
}

export const getAllTreatments = async (allTreatments) => {

    return await axios.get('http://localhost:3000/treatments', allTreatments)
}

export const createAppointment = async (token, newAppointment) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    let res = await axios.post('http://localhost:3000/appointments', newAppointment, config)
    return res
}

export const getPatientAppointments = async (token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

   let res = await axios.get('http://localhost:3000/appointments/patient', config)
   return res.data
}

export const deleteAppointment = async (token, appointmentId) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    return await axios.delete(`http://localhost:3000/appointments/${appointmentId}`, config)
}