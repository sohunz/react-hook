import React from "react";
import { ThemeProvider } from "./themeContext";
import Test from "./Test";

const UseContext = () => {
    return (
        <div>
            <ThemeProvider>
                <Test />
            </ThemeProvider>
        </div>
    )
};

export default UseContext;
