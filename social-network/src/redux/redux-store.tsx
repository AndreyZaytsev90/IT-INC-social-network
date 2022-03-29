import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

export const rootReducer = combineReducers({   // объект с редьюсерами
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    /*sidebar: sidebarReducer*/
})

export type RootReducerType = ReturnType<typeof rootReducer>

//window.store = store

export const store = createStore(rootReducer)