import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import mySaga from '../Saga'
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),

)
sagaMiddleware.run(mySaga)
export const persistor = persistStore(store)

