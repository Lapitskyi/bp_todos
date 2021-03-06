import {configureStore,combineReducers} from "@reduxjs/toolkit";
import todoReducers from '../redux/todoSlice'

const rootReducer = combineReducers({
    todoReducers
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


