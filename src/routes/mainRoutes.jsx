import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";

const mainRoutes = createBrowserRouter([
    {
        path: '/login',
        element: (
            <Login/>
        )
    }
])

export default mainRoutes