import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export const rootReducer = combineReducers({   // объект с редьюсерами
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    /*sidebar: sidebarReducer*/
})

export type RootReducerType = ReturnType<typeof rootReducer>

//window.store = store

export const store = createStore(rootReducer)