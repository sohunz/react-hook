import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "DECREMENT":
            return { count: state.count - 1, showText: !state.showText };
        default:
            return state;
    }
};

const initialState = { count: 0, showText: true };

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <div>
            <p>{state.count}</p>
            <button
                className="border py-1 px-3 m-1"
                onClick={() => dispatch({ type: "INCREMENT" })}
            >
                +
            </button>
            <button
                className="border py-1 px-3 m-1"
                onClick={() => {
                    dispatch({ type: "DECREMENT" });
                }}
            >
                -
            </button>

            {state.showText && <p>Hello React JS</p>}
        </div>
    );
};

export default UseReducer;
