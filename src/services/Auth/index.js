import axios from "axios"
import { routeAPi } from "@/config/api";


//inintialisation token
let token =  localStorage.getItem("auth");
var header = null
if(token){
    header = {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization':'Bearer ' + token
    } 
}else{
    header = {
        'Content-type': 'application/x-www-form-urlencoded',
    } 
}





//service de requette
export function login(data) {
    return axios.post(routeAPi.login,data,header)
            .then(response => {return response.data})
            .catch(error => console.log(error))

}

export function register(data) {
    console.log(data);
    return axios.post(routeAPi.register,data,header)
        .then(response => {return response.data})
        .catch(error => console.log(error))
}
