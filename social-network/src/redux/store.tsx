import {v1} from "uuid";
import profileReducer, {addPostAC, updateNewPostAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateNewMessageAC} from "./dialogs-reducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "./users-reducer";

type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}

export type StateType = {
    profilePage: MyPostsPropsType
    dialogsPage: DialogsPropsType
    /*sidebar: SidebarPropsType*/
}
export type MessagePropsType = {
    id: string
    message: string

}
export type DialogItemPropsType = {
    name: string
    id: string
}
export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type UsersPropsType = {
    id: string,
    photos: PhotosPropsType
    followed: boolean,
    name: string,
    status: string,
    location: UsersLocation
}
export type UsersLocation = {
    city: string,
    country: string
}
type PhotosPropsType = {
    small: string,
    large: string
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalCountAC>


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

        },
        /*sidebar: {}*/
    },
    _onChange() {
        console.log("State changed")
    },

    /*addPost(postText: string) {
        const newPost: PostPropsType = {
            id: v1(),
            message: postText,
            likesCount: 2,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },*/
    /* updateNewPostText(newText: string) {
         this._state.profilePage.newPostText = newText
         this._onChange()
     },*/

    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {// { type: "ADD-POST" }
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        /*this._state.sidebar = sidebarReducer(this._state.sidebar, action)*/

        this._onChange()
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
