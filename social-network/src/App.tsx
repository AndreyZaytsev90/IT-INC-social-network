import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import {DialogsType, MessageType, PostType} from "./index";




type AppPropsType = {
    posts: PostType[]
    dialogs: DialogsType[]
    messages: MessageType[]
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/dialogs/*' element = {<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile'  element = {<Profile posts={props.posts} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;