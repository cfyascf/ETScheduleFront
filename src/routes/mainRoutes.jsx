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
import UserRegister from "../pages/UserRegister";
import SubjectRegister from "../pages/SubjectRegister";
import InstructorClasses from "../pages/InstructorClasses";
import Class from "../pages/ClassPage";
import Student from "../pages/Student";
import CourseSkillsRegister from "../pages/CourseSkillsRegister";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Login/>
        )
    },
    {
        path: '/home',
        element: (
            <Home/>
        )
    },
    {
        path: '/courses',
        element: (
            <Courses/>
        )
    },
    {
        path: '/courses-register',
        element: (
            <CoursesReg/>
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