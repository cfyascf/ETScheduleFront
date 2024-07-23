import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import StudentCourses from "../pages/StudentCourses";
import CoursesReg from "../pages/CoursesRegister"
import StudentHome from "../pages/StudentHome"
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
import AdmHome from "../pages/AdmHome";
import AdmSubjects from "../pages/AdmSubjects";
import Student from "../pages/Student";
import Profiles from "../pages/Profiles";
import CourseSkillsRegister from "../pages/CourseSkillsRegister";
import PersonalReport from "../pages/PersonalReport";
import AdmClasses from "../pages/AdmClasses";
import Subjects from "../pages/Subjects";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: (
            <Login/>
        )
    },
    {
        path: '/student-home',
        element: (
            <StudentHome/>
        )
    },
    {
        path: '/student-courses',
        element: (
            <StudentCourses/>
        )
    },
    {
        path: '/courses-register',
        element: (
            <CoursesReg/>
        )
    },
    {
        path: '/skills/:id',
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
        path: '/class/:id',
        element: (
            <Class/>
        )
    }, 
    {
        path: '/student',
        element: (
            <Student/>
        )
    },
    {
        path: '/personal-report',
        element: (
            <PersonalReport/>
        )
    },
    {
        path: '/profiles',
        element: (
            <Profiles/>
        )
    },
    {
        path: '/adm-home',
        element: (
            <AdmHome/>
        )
    },
    {
        path: '/adm-subjects',
        element: (
            <AdmSubjects/>
        )
    },
    {
        path: '/adm-classes',
        element: (
            <AdmClasses/>
        )
    },
    {
        path: '/subjects/:id',
        element: (
            <Subjects/>
        )
    },
    {
        path: '/course-skills-register/:id',
        element: (
            <CourseSkillsRegister/>
        )
    }
])

export default mainRoutes