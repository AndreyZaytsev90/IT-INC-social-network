import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PropsType = {
    message: string
    name: string
    likesCount: number
    id: number
}

export let dialogs  = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Olga"},
    {id: 3, name: "Petr"},
    {id: 4, name: "Sergey"},
]

export let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
]

export let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 30},
    {id: 2, message: "It's my first post", likesCount: 32},
]


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
