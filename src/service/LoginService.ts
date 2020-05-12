import axios from "axios"
export class LoginService{
    static async Login(){
        return  await axios('/api/users')
       
    }
}