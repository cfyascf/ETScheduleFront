import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Footer from "../components/Footer"
import Home from "../pages/Home"

const mainRoutes = createBrowserRouter([
    {
        path: '/login',
        element: (
            <Home/>
        )
    }
])

export default mainRoutes