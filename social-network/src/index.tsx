import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyPosts from "./components/Profile/My posts/MyPosts";

/*export type PropsType = {
    message: string
    name: string
    likesCount: number
    id: number
}
export type DialogsPropsType = {
    id : number
    name: string
    message: string
}

export type PostPropsType = {
    message: string
    likesCount: number
}

export type MyPostsPropsType = {
    id : number
    message: string
    likesCount: number
    name: string
}*/

export type MessageType = {
    id : number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id : number
    name: string
}

export let posts: PostType[] = [
    {id: 1, message: "Hi, how are you?", likesCount: 30},
    {id: 2, message: "It's my first post", likesCount: 32}
]

export let dialogs: DialogsType[]  = [
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
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
