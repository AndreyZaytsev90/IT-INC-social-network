import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import {PostPropsType, StateType} from "./redux/state";




type AppPropsType = {
  /*  posts: PostType[]
    dialogs: DialogsType[]
    messages: MessageType[]*/
    state: StateType
    addPost: PostPropsType
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/dialogs/*' element = {<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                        <Route path='/profile'  element = {<Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;