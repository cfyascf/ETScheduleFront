import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import CoursesReg from "../pages/";
import Home from "../pages/Home"

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
            <Home/>
        )
    }
])

export default mainRoutes