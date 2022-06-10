
import { combineReducers} from "redux";
import { counterReducer } from "../Counter/counterReducer";
import { todoReducer } from "../TodoApp/todoReducer";
import { legacy_createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer
})

// export const store=legacy_createStore();



// import { legacy_createStore, applyMiddleware, compose } from "redux";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware()));