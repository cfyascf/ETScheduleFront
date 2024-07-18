import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import CoursesReg from "../pages/CoursesRegister"
import Home from "../pages/Home"
import FistAcess from "../pages/FistAcess";
import Skills from "../pages/Skills";
import InstructorHome from "../pages/InstructorHome";
import RegisterClass from "../pages/RegisterClass";
import RegisterEvent from "../pages/RegisterEvents";
import RegisterLesson from "../pages/RegisterLesson";

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
        path: '/courses-register',
        element: (
            <CoursesReg/>
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
    },
    {
        path: '/skills',
        element: (
            <Skills/>
        )
    },
    {
        path: '/instructor-home',
        element: (
            <InstructorHome/>
        )
    },
    {
        path: '/register-class',
        element: (
            <RegisterClass/>
        )
    },
    {
        path: '/register-event',
        element: (
            <RegisterEvent/>
        )
    },
    {
        path: '/register-lesson',
        element: (
            <RegisterLesson/>
        )
    }
])

export default mainRoutes