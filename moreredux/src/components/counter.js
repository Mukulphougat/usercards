// import props from "../redux/props";
// import {useState} from "react";
import {connect} from "react-redux";
import {decrement, increment, reset} from "../redux/actions";

function mapStateToProps(state){
    return{counter: state.counterReducer.counter}
}
function mapDispatchToProps(dispatch){
    return{
        incrementCounter: () => dispatch(increment()),
        decrementCounter: () => dispatch(decrement()),
        resetCounter: () => dispatch(reset())
    }
}
function Counter(props) {
    return (
        <div>
            <h1>Hello {props.counter}</h1>
            <button onClick={() => props.incrementCounter()}>Increment</button>
            <button onClick={() => props.decrementCounter()}>Decrement</button>
            <button onClick={() => props.resetCounter()}>Reset</button>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

