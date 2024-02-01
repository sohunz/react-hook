import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import HomeView from "./HomeView";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseContext from "../components/useContext/UseContext"
import UseLayoutEffect from "./UseLayoutEffect";

const Home = () => {
    const routes = [
        {
            path: "/",
            element: <HomeView />,
            title: "Homepage",
        },
        {
            path: "/usestate",
            element: <UseState />,
            title: "useState",
        },
        {
            path: "/useeffect",
            element: <UseEffect />,
            title: "useEffect",
        },
        {
            path: "/usereducer",
            element: <UseReducer />,
            title: "useReducer",
        },
        {
            path: "/useref",
            element: <UseRef />,
            title: "useRef",
        },
        {
            path: "/usecontext",
            element: <UseContext />,
            title: "useContext",
        },
        {
            path: "/uselatyouteffect",
            element: <UseLayoutEffect />,
            title: "useLayoutEffect",
        },
    ];

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <BrowserRouter>
            <header className="pb-5">
                <div className="border-1 p-2 flex flex-wrap justify-start bg-slate-100">
                    {routes.map((route, index) => {
                        return (
                            <Link
                                className={`py-2 px-3 mx-1 rounded-md hover:bg-slate-200 ease-in-out duration-100  ${
                                    activeItem === index ? "bg-slate-200" : ""
                                }`}
                                onClick={() => handleItemClick(index)}
                                href={route.path}
                                key={index}
                                to={route.path}
                            >
                                {route.title}
                            </Link>
                        );
                    })}
                </div>
            </header>
            <main className="m-3">
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        );
                    })}
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Home;
