import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Home/>
        )
    }
])

export default mainRoutes