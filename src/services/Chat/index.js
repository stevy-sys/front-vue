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


export function getAllConversation() {
    let headers = header ;
    return axios.get(routeAPi.conversation,{headers})
            .then(response => {return response.data})
            .catch(error => console.log(error))
}