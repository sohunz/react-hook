import { useReducer } from "react";



const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT" : 
            return {count: state.count+1, showText: state.showText}
        case "DECREMENT" :
            return {count: state.count-1,  showText: !state.showText}
        default: 
            return state
    }
}



const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return (
        <div>
            <p>{count}</p>
            <button
                className="border py-1 px-3 m-1"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
            <button
                className="border py-1 px-3 m-1"
                onClick={() => setCount(count - 1)}
            >
                -
            </button>

            {showText && <p>Hello React JS</p>}

        </div>
    );
};

export default UseReducer;
