import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Footer/>
        )
    }
])

export default mainRoutes