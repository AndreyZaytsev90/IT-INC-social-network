import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import {StoreType} from "./redux/state";


type AppPropsType = {
    //state: StateType
    //addPost: (postText: string) => void
    //newPostText?: string
    //updateNewPostText?: (newText: string) => void
    store: StoreType
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
                                                                   messages={state.dialogsPage.messages}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={state.profilePage.posts}
                                                 addPost={props.store.addPost.bind(props.store)}
                                                 newPostText={state.profilePage.newPostText}
                                                 updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;