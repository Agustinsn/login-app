export interface User {
    register?:boolean
    name:string
    lastName:string
    userName:string
    email:string
    password:string
}

export const registerUser = ({...newUser}:User)=>{
    const {name, lastName, userName, email, password} = newUser
    console.log(name, lastName, userName, email, password)
}