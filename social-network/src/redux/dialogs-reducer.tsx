import React from 'react';
import {ActionsTypes, DialogItemPropsType, MessagePropsType} from "./store";
import {v1} from "uuid";

export type InitialDialogsStateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

const initialState: InitialDialogsStateType = {
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

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: ActionsTypes): InitialDialogsStateType=> {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagePropsType = {
                id: v1(),
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, newMessage]
            }
            //const stateCopy = {...state}
            //stateCopy.messages = [...state.messages]
            //stateCopy.messages.push(newMessage)
            //stateCopy.newMessageBody = ""

        case "UPDATE-NEW-MESSAGE-BODY":
            //const stateCopy = {...state}
            return  {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state
    }
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