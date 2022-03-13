import { routeBasic } from "."

export const routeAPi = {

    //authentification
    login:routeBasic + 'login/' ,
    register:routeBasic + 'register/' ,


    //chat
    conversation:routeBasic + 'chat/allConversation',
    allDiscussion:routeBasic + 'chat/allDiscussion/',


    //user
    myProfil:routeBasic + 'user/'
}