import axios from "axios";

export const loginUser = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/login', inputInfo)
}

export const registerMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/register', inputInfo)
}

export const getProfile = async (profileInfo) => {

    return await axios.get('http://localhost:3000/users/profile', profileInfo)
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

export const getPatientAppointments = async (appointments) => {

    return await axios.get('http://localhost:3000/appointments/patient', appointments)
}

export const deleteAppointment = async (appointmentId) => {

    return await axios.delete(`http://localhost:3000/appointments/${appointmentId}`, appointmentId)
}