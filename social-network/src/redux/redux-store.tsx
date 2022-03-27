import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";

export const rootReducer = combineReducers({   // объект с редьюсерами
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    /*sidebar: sidebarReducer*/
})

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)