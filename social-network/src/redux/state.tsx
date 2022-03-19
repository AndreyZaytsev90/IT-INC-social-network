import {v1} from "uuid";
/*import AvaAndrey from '../avatars/Andrey.jpg'
import AvaOlga from '../avatars/Olga.jpg'
import AvaPetr from '../avatars/Petr.jpg'*/

export type StoreType = {
    _state: StateType
    _onChange: () => void
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

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
    addPost?: (postText: string) => void
    newPostText: string
    updateNewPostText?: (newText: string) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi, how are you?", likesCount: 30},
                {id: v1(), message: "It's my first post", likesCount: 32}
            ],
            newPostText: "it-incubator",
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
    },
    _onChange() {
        console.log("State changed")
    },
    addPost(postText: string) {
        const newPost: PostPropsType = {
            id: v1(),
            message: postText,
            likesCount: 2,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState () {
        return this._state
    }
}

/*let rerenderEntireTree = (state: StateType) => {
    console.log("State changed")
}*/

/*export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 30},
            {id: v1(), message: "It's my first post", likesCount: 32}
        ],
        newPostText: "it-incubator",
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
}*/

/*export const addPost = (postText: string) => {
    const newPost: PostPropsType = {
        id: v1(),
        message: postText,
        likesCount: 2,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}*/

/*export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}*/

/*
export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer
}*/
