export const checkError = (name, value) => {

    switch(name){
        case "email":
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "El email es incorrecto";
            }
            return "";
        
        case "password":
            
            if(value.length < 8){
            // if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(value)){
                
                return "La contraseña es incorrecta"
            }
            return "";

        default:
            console.log("Unknown format");
    }
        

}