import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState("Hello React JS");

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

export default UseState;
