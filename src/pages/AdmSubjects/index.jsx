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
import ClassCard from "../../components/ClassCard/cards";
import { getAllCourses } from "../../services/courseService";

// const subjectData = [
//     { class: 'Python' },
//     { class: 'Power BI' },
//     { class: 'IA' },
//     { class: 'IoT' },
//     { class: 'Web' },
//     { class: 'SQL' },
//     { class: 'Java' }
// ]

const AdmSubject = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await getAllCourses();
                setCourses(response.data); // Assuming your API returns an array of courses
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }

        fetchCourses();
    }, []); // Empty dependency array ensures useEffect runs only once

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
                            <AdmMenu />
                            <PageContentItems>
                                <CardsContainer>
                                    {courses.map(course => (
                                        <Link key={course.id} to={`/subjects/${course.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <ClassCard
                                                key={course.id}
                                                name={course.name}
                                                onChange={e => setName(e.target.value)} // Not sure if you need this onChange here
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
    );
}

export default AdmSubject