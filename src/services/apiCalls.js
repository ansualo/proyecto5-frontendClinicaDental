import axios from "axios";

export const loginMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/login', inputInfo)
}

export const registerMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/register', inputInfo)
}

export const getProfile = async (profileInfo) => {

    return await axios.get('http://localhost:3000/users/profile', profileInfo)
}