import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({   // объект с редьюсерами
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    /*sidebar: sidebarReducer*/
})

export const store: StoreType = createStore(reducers)