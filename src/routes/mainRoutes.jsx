import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Home from "../pages/Home"

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Home/>
        )
    }
])

export default mainRoutes