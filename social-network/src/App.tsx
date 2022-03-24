import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import {ActionsTypes, StoreType} from "./redux/store";


type AppPropsType = {
    //state: StateType
    //addPost: (postText: string) => void
    //newPostText?: string
    //updateNewPostText?: (newText: string) => void
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                                   messages={state.dialogsPage.messages}
                                                                   newMessageBody={state.dialogsPage.newMessageBody}
                                                                   dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={state.profilePage.posts}
                                   /*addPost={props.store.dispatch.bind(props.store)}*/
                                                 newPostText={state.profilePage.newPostText}
                                   /*updateNewPostText={props.store.dispatch.bind(props.store)}*/
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;