import axios from "axios";

export const loginMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/login', inputInfo)
}

export const registerMe = async (inputInfo) => {

    return await axios.post('http://localhost:3000/auth/register', inputInfo)
}