import axios from "axios"
import { routeAPi } from "@/config/api";


//inintialisation token
let token =  localStorage.getItem("auth");
var header = null
if(token){
    header = {
        headers:{
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization':'Bearer ' + token
        }
    } 
}else{
    header = {
        'Content-type': 'application/x-www-form-urlencoded',
    } 
}





//service de requette
export function profil() {
    console.log(header);
    return axios.get(routeAPi.myProfil,header)
            .then(response => {return response.data})
            .catch(error => console.log(error))

}