import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import CoursesReg from "../pages/CoursesRegister"
import Home from "../pages/Home"
import FistAcess from "../pages/FistAcess";
import Skills from "../pages/Skills";
import InstructorHome from "../pages/InstructorHome";
import UserRegister from "../pages/UserRegister";
import SubjectRegister from "../pages/SubjectRegister";
import InstructorClasses from "../pages/InstructorClasses";
import Class from "../pages/ClassPage";

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
    {
        path: '/instructor-classes',
        element: (
            <InstructorClasses/>
        )
    }, 
    {
        path: '/class',
        element: (
            <Class/>
        )
    }, 
])

export default mainRoutes