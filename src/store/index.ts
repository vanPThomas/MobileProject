import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/slice";
import favoritesReducer from "./favorites/slice";
import basketReducer from './basket/slice';
import userReducer from './login/slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key: "state",
    version: 1,
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    counter: counterReducer, 
    favorites: favoritesReducer, 
    basket: basketReducer,
    user: userReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


// VIEW -> ACTION -> REDUCER -> STATE -> VIEW