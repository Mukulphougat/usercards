import {Reducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

const reduxStore = configureStore({
    reducer: {
    counterReducer: Reducer,
    }
});
export default reduxStore;