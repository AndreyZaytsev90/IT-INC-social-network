import React from 'react';
import {ActionsTypes, UsersPropsType} from "./store";
import {v1} from "uuid";


export type InitialProfileStateType = {
    users: Array<UsersPropsType>
}

const initialState: InitialProfileStateType = {
    users: [
        {id: v1(), followed: true, fullName: "Andrey", status: "I am a programmer", location: {city: "Moscow", country: "Russia"}},
        {id: v1(), followed: true, fullName: "Olga", status: "I am a head of quality", location: {city: "Aleksin", country: "Russia"}},
        {id: v1(), followed: true, fullName: "Petr", status: "I am a preschool child", location: {city: "Moscow", country: "Russia"}},
        {id: v1(), followed: false, fullName: "Sergey", status: "I am a student", location: {city: "Moscow", country: "Russia"}},
    ]
}

const usersReducer = (state: InitialProfileStateType = initialState, action: ActionsTypes): InitialProfileStateType => {


    switch (action.type) {
        default:
            return state
    }
};

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export default usersReducer;