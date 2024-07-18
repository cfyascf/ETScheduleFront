import React, { useState } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu";
import Card from "./components/Card/cards";
import { MainContainer, PageContent, CardsContainer, PageContentItems } from "./styles";

const coursesData = [
    {course: 'Python', name: 'Donathan Ramalho'},
    {course: 'Power BI', name: 'Donathan Ramalho'},
    {course: 'Java', name: 'Leonardo Trevisan'},
    {course: 'Java Avançado', name: 'Leonardo Trevisan'},
    {course: 'C#', name: 'Leonardo Trevisan'},
    {course: 'IoT', name: 'Queila Lima'},
    {course: 'Comunicação', name: 'Queila Lima'},
    {course: 'Inglês', name: 'Queila Lima'}
]

const Courses = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);

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
                <PageContentItems>
                    <StudentMenu />
                    <CardsContainer>
                        {coursesData.map((courseData, index) => (
                            <Card 
                                key={index} 
                                course={courseData.course} 
                                name={courseData.name} 
                            />
                        ))}
                    </CardsContainer>
                </PageContentItems>
            </PageContent>
            <Footer />
        </>
    );
};

export default Courses;