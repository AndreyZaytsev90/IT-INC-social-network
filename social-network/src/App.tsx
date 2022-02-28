import React from 'react';
import './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
/*import {DialogsType, MessageType, PostType} from "./index";*/
import {StateType} from "./redux/state";




type AppPropsType = {
  /*  posts: PostType[]
    dialogs: DialogsType[]
    messages: MessageType[]*/
    appState: StateType

}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path='/dialogs/*' element = {<Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>}/>
                        <Route path='/profile'  element = {<Profile posts={props.appState.posts} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;