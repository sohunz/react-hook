import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
    // useEffect
    useEffect(() => {
        console.log("useEffect");
    }, []);

    // useLayoutEffect
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, []);

    return (
        <div>
            <p>UseLayoutEffect</p>
        </div>
    );
};

export default UseLayoutEffect;
