import React from 'react';
import {ActionsTypes, DialogsPropsType, MessagePropsType} from "./store";
import {v1} from "uuid";


let initialState = {
    dialogs: [
        {id: v1(), name: "Andrew"},
        {id: v1(), name: "Olga"},
        {id: v1(), name: "Petr"},
        {id: v1(), name: "Sergey"}
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra?"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "How do you do?"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state: DialogsPropsType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagePropsType = {
                id: v1(),
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ""
            /*_onChange()*/
            break;
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            /*_onChange()*/
            break;
        default:
            return state
    }

    return state
};

export const addMessageAC = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageBody: message,
    } as const
}
export const updateNewMessageAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export default dialogsReducer;