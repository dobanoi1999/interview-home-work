import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer
})


export default persistReducer(persistConfig, rootReducer)