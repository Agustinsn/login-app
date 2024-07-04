import { User } from "../services/registerUser"

export const isFormComplete = ({...state}:User) => {
    const {register, name, lastName, userName, email, password} = state
    if(register){
        return name && lastName && userName && email && password
    }
    else{
        return userName && password
    }
}