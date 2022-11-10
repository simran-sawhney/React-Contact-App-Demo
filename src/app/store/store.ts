import { AnyAction, applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunkMiddleware];
const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;
