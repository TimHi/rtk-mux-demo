import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit'
import localBackend from '../api/local-backend';
import listenerMiddleware from './middleware';

const rootReducer = combineReducers({
    [localBackend.reducerPath]: localBackend.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().prepend(
                listenerMiddleware.middleware,
                localBackend.middleware,
            );
        },
        preloadedState
    });
}

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
