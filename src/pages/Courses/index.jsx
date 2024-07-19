import React, { useState } from 'react';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu";
import Card from "../../components/Card/cards";
import { PageContent, CardsContainer, PageContentItems, TopContent } from "./styles";

const coursesData = [
    { course: 'Python', name: 'Donathan Ramalho', semester: '2', color: '#fcba03' },
    { course: 'Power BI', name: 'Donathan Ramalho', semester: '2', color: '#6b03fc' },
    { course: 'Java', name: 'Leonardo Trevisan', semester: '2', color: 'purple' },
    { course: 'Java Avançado', name: 'Leonardo Trevisan', semester: '1', color: '#fc7303' },
    { course: 'C#', name: 'Leonardo Trevisan', semester: '1', color: '#0384fc' },
    { course: 'IoT', name: 'Queila Lima', semester: '1', color: '#8cc8d1' },
    { course: 'Comunicação', name: 'Queila Lima', semester: '2', color: 'green' },
    { course: 'Inglês', name: 'Queila Lima', semester: '2', color: 'brown' },
    { course: 'IA', name: 'Leonardo Trevisan', semester: '3', color: 'aqua' }
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
                <TopContent>
                    <StudentMenu />
                    <PageContentItems>
                        <CardsContainer>
                            {coursesData.map((courseData, index) => (
                                <Card
                                    key={index}
                                    course={courseData.course}
                                    name={courseData.name}
                                    semester={courseData.semester}
                                    color={courseData.color}
                                />
                            ))}
                        </CardsContainer>
                    </PageContentItems>
                </TopContent>
            </PageContent>
            <Footer />
        </>
    );
};

export default Courses;