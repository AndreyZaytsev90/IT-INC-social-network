import {v1} from "uuid";
/*import AvaAndrey from '../avatars/Andrey.jpg'
import AvaOlga from '../avatars/Olga.jpg'
import AvaPetr from '../avatars/Petr.jpg'*/

export type StoreType = {
    _state: StateType
    _onChange: () => void
    /*addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void*/
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

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
}
export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    dispatch?: (action: ActionsTypes) => void

}
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    /*addPost?: (postText: string) => void*/
    newPostText: string
    /*updateNewPostText?: (newText: string) => void*/
    dispatch?: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        postText: newPostText
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const addMessageAC = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: message
    } as const
}
export const updateNewMessageAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
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
        if (action.type === "ADD-POST") {
            const newPost: PostPropsType = {
                id: v1(),
                message: action.postText,
                likesCount: 2,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
         else if (action.type === "ADD-MESSAGE") {
            const newMessage: MessagePropsType = {
                id: v1(),
                message: action.messageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ""
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange()
        }
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
