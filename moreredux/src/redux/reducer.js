// import myState from "./states/myState";

import {createReducer} from "@reduxjs/toolkit";
import {decrement, increment, reset} from "./actions";
import myState from './states/myState'
export const Reducer = createReducer(myState,{
    [increment]: (state,action) => { return {counter: state.counter+1} },
    [decrement]: (state,action) => { return {counter: state.counter-1} },
    [reset]: (state,action) => { return {counter: 0} },
})
// export default function Reducer(state=myState, action){
//     if ( action.type === 'increment'){
//         return {counter: state.counter+1};
//     }
//     else if (state.counter >= 1 && action.type === 'decrement'){
//         return {counter: state.counter-1};
//     }
//     else if ( action.type === 'reset'){
//         return {counter: 0};
//     }
//     else {
//         return state;
//     }
// }