import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileClose from "../../components/SideProfileClose";
import SideProfileOpen from "../../components/SideProfileOpen";
import StudentMenu from "../../components/StudentMenu";
import Welcome from "../../components/Welcome";
import { CardsContainer, Information, MainContainer, PageContent, PageContentItems, TopContent } from "./styles";
import SideProfileADMOpen from '../../components/SideProfileADMOpen';
import AdmMenu from '../../components/AdmMenu';
import Card from "../../components/Card/cards";
import { getHeaders } from "../../services/headers";
import api from "../../services/api";

// const coursesData = [
//     { course: 'Python', name: 'Donathan Ramalho', semester: '2', color: '#fcba03' },
//     { course: 'Power BI', name: 'Donathan Ramalho', semester: '2', color: '#6b03fc' },
//     { course: 'Java', name: 'Leonardo Trevisan', semester: '2', color: 'purple' },
//     { course: 'Java Avançado', name: 'Leonardo Trevisan', semester: '1', color: '#fc7303' },
//     { course: 'C#', name: 'Leonardo Trevisan', semester: '1', color: '#0384fc' },
//     { course: 'IoT', name: 'Queila Lima', semester: '1', color: '#8cc8d1' },
//     { course: 'Comunicação', name: 'Queila Lima', semester: '2', color: 'green' },
//     { course: 'Inglês', name: 'Queila Lima', semester: '2', color: 'brown' },
//     { course: 'IA', name: 'Leonardo Trevisan', semester: '3', color: 'aqua' }
// ]


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

const AdmHome = () => {
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
            <MainContainer>
                <Navbar />
                <PageContent>
                    {isProfileOpen ? (
                        <SideProfileADMOpen toggleProfileADM={toggleProfile} />
                    ) : (
                        <SideProfileClose toggleProfile={toggleProfile} />
                    )}
                    <Information>
                        <TopContent>
                            <Welcome />
                            <AdmMenu />
                            <PageContentItems>
                                <CardsContainer>
                                    {courses.map(courses => (
                                        <Link key={courses.id} to={`/course-skills-register/${courses.id}`} style={{ textDecoration: "none", color: "black" }}>
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

                    </Information>
                </PageContent>

                <Footer />
            </MainContainer>
        </>
    )
}

export default AdmHome