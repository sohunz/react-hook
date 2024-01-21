import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef(null);
    const [name, setName] = useState("name");

    const handleChangName = () => {
        // get value from input
        console.log(inputRef.current.value);

        // set name into state name
        setName(inputRef.current.value);

        // when click on button the input field will focus
        inputRef.current.focus();

        // clear input field
        inputRef.current.value = "";
    };

    //  use useEffect when component run the input field will focus

    useEffect(() => {
        inputRef.current.focus();
        console.log("useEffect ran");
    }, []);

    return (
        <div>
            <p>{name}</p>
            <input
                type="text"
                placeholder="input name"
                className="border rounded-md p-2 outline-none mt-3"
                ref={inputRef}
            />
            <button
                className="border rounded-md outline-none p-2 ml-2"
                onClick={handleChangName}
            >
                change name
            </button>
        </div>
    );
};

export default UseRef;
