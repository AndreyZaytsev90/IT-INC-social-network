import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
    newPostText?: string
    updateNewPostText?: (newText: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                   messages={props.state.dialogsPage.messages}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={props.state.profilePage.posts}
                                                 addPost={props.addPost}
                                                 newPostText={props.state.profilePage.newPostText}
                                                 updateNewPostText={props.updateNewPostText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;