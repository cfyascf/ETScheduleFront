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
import { getHeaders } from "../../services/headers";
import api from "../../services/api";

const getAllCourses = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/course",
        {
            headers: headers
        }
    );

    return response;
}

const AdmSubject = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await getAllCourses();
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
                            <AdmMenu />
                            <PageContentItems>
                                <CardsContainer>
                                    {courses.map(course => (
                                        <Link key={course.id} to={`/subjects/${course.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <ClassCard
                                                key={course.id}
                                                name={course.name}
                                                
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