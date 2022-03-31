import React from 'react';
import {ActionsTypes, UsersPropsType} from "./store";
import {v1} from "uuid";


export type InitialUsersStateType = {
    users: Array<UsersPropsType>
}

const initialState: InitialUsersStateType = {
    users: [
        /*{
            id: v1(),
            photoUrl: "https://i.ibb.co/6Z9JcZr/003.jpg",
            followed: true,
            fullName: "Andrey",
            status: "I am a programmer",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: v1(),
            photoUrl: "https://i.ibb.co/DbLb2Bg/002.jpg",
            followed: true,
            fullName: "Olga",
            status: "I am a head of quality",
            location: {city: "Aleksin", country: "Russia"}
        },
        {
            id: v1(),
            photoUrl: "https://i.ibb.co/Bw7pYVg/001.jpg",
            followed: true,
            fullName: "Petr",
            status: "I am a preschool child",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: v1(),
            photoUrl: "https://i.ibb.co/YpXxHKc/P8110099.jpg",
            followed: false,
            fullName: "Sergey",
            status: "I am a student",
            location: {city: "Moscow", country: "Russia"}
        },*/
    ]
}

const usersReducer = (state: InitialUsersStateType = initialState, action: ActionsTypes): InitialUsersStateType => {


    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(users => users.id === action.userId ? {...users, followed: true} : users)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(users => users.id === action.userId ? {...users, followed: false} : users)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [/*...state.users,*/ ...action.users]
            }

        default:
            return state
    }
};

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersPropsType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export default usersReducer;