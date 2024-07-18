import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import CoursesReg from "../pages/CoursesRegister"
import Home from "../pages/Home"
import Skills from "../pages/Skills";
import InstructorHome from "../pages/InstructorHome";
import UserRegister from "../pages/UserRegister";
import SubjectRegister from "../pages/SubjectRegister";

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
        path: '/instructor-home',
        element: (
            <InstructorHome/>
        )
    },
    {
        path: '/user-register',
        element: (
            <UserRegister/>
        )
    },
    {
        path: '/subject-register',
        element: (
            <SubjectRegister/>
        )
    },
])

export default mainRoutes