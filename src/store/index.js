import { createStore } from "redux";

const reducerFn = ( state = {counter: 0}, action) => {

    if (action.type === "INC") {
        return {counter:state.counter + 1}
    }

    if (action.type === "DEC") {
        return {counter:state.counter - 2}
    }

    return state;
}

const store = createStore(reducerFn)

export default store