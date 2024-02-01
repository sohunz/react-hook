import React from "react";
import { useTheme } from "./themeContext";

const Child = () => {
    const testing = useTheme();
    const styled = {
        backgroundColor: testing ? "blue" : "red",
    };
    return (
        <div>
            <p style={styled}>Hello Child</p>
        </div>
    );
};

export default Child;
