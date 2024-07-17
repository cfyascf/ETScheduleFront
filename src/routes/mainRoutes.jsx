import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Footer from "../components/Footer"
import Home from "../pages/Home"
import Courses from "../pages/Courses"

const mainRoutes = createBrowserRouter([
    {
        path: '/courses',
        element: (
            <Courses/>
        )
    },
    {
        path: '/login',
        element: (
            <Login/>
        )
    }
])

export default mainRoutes