import {v1} from "uuid";
import {rerenderEntireTree} from "../render";
/*import AvaAndrey from '../avatars/Andrey.jpg'
import AvaOlga from '../avatars/Olga.jpg'
import AvaPetr from '../avatars/Petr.jpg'*/

export type StateType = {
    profilePage: MyPostsPropsType
    dialogsPage: DialogsPropsType
}
export type MessagePropsType = {
    id: string
    message: string
}
export type DialogItemPropsType = {
    name: string
    id: string
    avatar: string
}
export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>

}
export type PostPropsType = {
    id: string
    message: any
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost?: () => void
    newPostText: string
    updateNewPostText?: (newText: string) => void
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 30},
            {id: v1(), message: "It's my first post", likesCount: 32}
        ],
        newPostText: "it-incubator"
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Andrew", avatar: ""},
            {id: v1(), name: "Olga", avatar: ""},
            {id: v1(), name: "Petr", avatar: ""},
            {id: v1(), name: "Sergey", avatar: ""}
        ],
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How is your it-kamasutra?"},
            {id: v1(), message: "Yo"},
            {id: v1(), message: "How do you do?"}
        ]
    }
}

export const addPost = () => {
    const newPost: PostPropsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 2,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}