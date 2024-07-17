import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Skills/>
        )
    }
])

export default mainRoutes