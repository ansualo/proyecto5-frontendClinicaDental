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

export const updateProfile = async (profileInfo) => {

    return await axios.put('http://localhost:3000/users/profile', profileInfo)
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

export const createAppointment = async (newAppointment) => {

    return await axios.post('http://localhost:3000/appointments', newAppointment)
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