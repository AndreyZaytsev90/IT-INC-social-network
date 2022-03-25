import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsTypes, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
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
                        <Route path='/dialogs/*' element={<DialogsContainer dialogs={state.dialogsPage.dialogs}
                                                                            messages={state.dialogsPage.messages}
                                                                            newMessageBody={state.dialogsPage.newMessageBody}
                                                                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path='/profile'
                               element={<Profile posts={state.profilePage.posts}
                                                 newPostText={state.profilePage.newPostText}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;