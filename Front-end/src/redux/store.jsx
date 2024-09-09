// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer'; // Correct path

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers/rootReducer"

const store = configureStore({
    reducer:rootReducer,
    devTools:true,
});
export default store;