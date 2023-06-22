
export const checkError = (name, value) => {

    switch (name) {

        case "date_of_birth":
            if (!/^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|1\d|2[0-9]|3[01])$/.test(value)) {
                return "La fecha de nacimiento es incorrecta";
            }
            return "";

        case "email":
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return "El email es incorrecto";
            }
            return "";

        case "password":
            if (value.length < 8) {
                // if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(value)){
                return "La contraseña es incorrecta"
            }
            return "";
        default:
            console.log("Unknown format");
    }


}