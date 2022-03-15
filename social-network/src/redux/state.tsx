import {v1} from "uuid";
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
    message: string
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostPropsType>
}



/*export let posts: PostType[] = [
    {id: 1, message: "Hi, how are you?", likesCount: 30},
    {id: 2, message: "It's my first post", likesCount: 32}
]

export let dialogs: DialogsType[] = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Olga"},
    {id: 3, name: "Petr"},
    {id: 4, name: "Sergey"}
]

export let messages: MessageType[] = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "How do you do?"}
]*/

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 30},
            {id: v1(), message: "It's my first post", likesCount: 32}
        ]
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

export let addPost = (postMessage: string) => {
    let newPost: PostPropsType = {
        id: v1(),
        message: postMessage,
        likesCount: 2,
    }

    state.profilePage.posts.push(newPost)
}