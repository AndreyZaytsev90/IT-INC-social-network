import React from 'react';
import {ActionsTypes, MyPostsPropsType, PostPropsType} from "./state";
import {v1} from "uuid";

const profileReducer = (state: MyPostsPropsType, action: ActionsTypes) => {

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