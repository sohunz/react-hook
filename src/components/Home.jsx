import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import HomeView from "./HomeView";
import { useState } from "react";

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
            title: "UseState",
        },
        {
            path: "/useeffect",
            element: <UseEffect />,
            title: "UseEffect",
        },
    ];

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <BrowserRouter>
            <header className="pb-5">
                <div className="border-1 p-2 flex justify-start bg-slate-100">
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
