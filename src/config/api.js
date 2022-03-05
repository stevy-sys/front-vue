import { routeBasic } from "."

export const routeAPi = {

    //authentification
    login:routeBasic + 'login/' ,
    register:routeBasic + 'register/' ,
    conversation:routeBasic + 'chat/allConversation',


    //user
    myProfil:routeBasic + 'user/'
}