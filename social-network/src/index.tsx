import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./redux/state";


export const onChange = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store = {store} dispatch={store.dispatch.bind(store)}
                 //addPost={addPost}
                // updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(onChange)
onChange()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
