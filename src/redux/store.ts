import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {localStorageReducer} from "./lacalstorageReducer";
import {settingsReducer} from "./settingsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    localstorage: localStorageReducer,
    settings: settingsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
