import React from 'react';
import {ActionsTypes, DialogsPropsType, MessagePropsType} from "./state";
import {v1} from "uuid";

const dialogsReducer = (state: DialogsPropsType, action: ActionsTypes) => {

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