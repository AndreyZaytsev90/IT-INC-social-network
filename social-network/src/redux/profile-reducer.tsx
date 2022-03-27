import React from 'react';
import {ActionsTypes, MyPostsPropsType, PostPropsType} from "./store";
import {v1} from "uuid";

export type InitialProfileStateType = {
    posts: Array<PostPropsType>
    newPostText: string
}


const initialState: InitialProfileStateType = {
    posts: [
    {id: v1(), message: "Hi, how are you?", likesCount: 30},
    {id: v1(), message: "It's my first post", likesCount: 32}
],
    newPostText: "it-incubator",
}

const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsTypes): InitialProfileStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 2,
            }
            state.posts.push(newPost)
            state.newPostText = ""
            /*_onChange()*/
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            /*_onChange()*/
            break;
        default:
            return state
    }

    return state
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

export default profileReducer;