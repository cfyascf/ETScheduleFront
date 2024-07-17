import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Footer from "../components/Footer"
import Home from "../pages/Home"

const mainRoutes = createBrowserRouter([
    {
        path: '/courses',
        element: (
            <Courses/>
        )
    },
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
    }
])

export default mainRoutes