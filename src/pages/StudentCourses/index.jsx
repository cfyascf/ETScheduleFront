import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu";
import Card from "../../components/Card/cards";
import { PageContent, CardsContainer, PageContentItems, TopContent } from "./styles";
import { Link } from "react-router-dom";
import { getHeaders } from "../../services/headers";
import api from "../../services/api";


const getAllDisciplines = async () => {
    const headers = getHeaders();
    const response = await api.get(
        "/discipline",
        {
            headers: headers
        }
    );

    return response;
}

const StudentCourses = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);


    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await getAllDisciplines();
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }

        fetchCourses();
    }, []);

    const toggleProfile = () => {
        setProfileOpen(prevState => !prevState);
    };

    return (
        <>
            <Navbar />
            <PageContent>
                {isProfileOpen ? (
                    <SideProfileOpen toggleProfile={toggleProfile} />
                ) : (
                    <SideProfileClose toggleProfile={toggleProfile} />
                )}
                <TopContent>
                    <StudentMenu />
                    <PageContentItems>
                        <CardsContainer>
                            {courses.map(courses => (
                                <Link key={courses.id} to={`/skills/${courses.id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <Card
                                        key={courses.id}
                                        name={courses.name}
                                        instructor={courses.instructor}
                                        semester={courses.semester}
                                    />
                                </Link>
                            ))}
                        </CardsContainer>
                    </PageContentItems>
                </TopContent>
            </PageContent>
            <Footer />
        </>
    );
};

export default StudentCourses;