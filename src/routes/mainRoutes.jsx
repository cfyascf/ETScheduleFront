import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import Home from "../pages/Home"
import Skills from "../pages/Skills";
import FistAcess from "../pages/FistAcess";

const mainRoutes = createBrowserRouter([
    {
        path: '/courses',
        element: (
            <Courses/>
        )
    },
    {
        path: '/',
        element: (
            <Login/>
        )
    },
    {
        path: '/home',
        element: (
            <Home/>
        )
    },
    {
        path: '/skills',
        element: (
            <Skills/>
        )
    },
    {
        path: '/fistacess',
        element: (
            <FistAcess/>
        )
    }
])

export default mainRoutes