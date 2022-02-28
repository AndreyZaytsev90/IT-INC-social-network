export type StateType = {
    posts: PostType[]
    dialogs: DialogsType[]
    messages: MessageType[]
}

export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
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
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 30},
        {id: 2, message: "It's my first post", likesCount: 32}
    ],
    dialogs: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Olga"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Sergey"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "How do you do?"}
    ]
}