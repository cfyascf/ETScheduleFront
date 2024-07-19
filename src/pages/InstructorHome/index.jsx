import React, { useState } from 'react';
import { MainContainer, PageContent, TopContent, CardsContainer, PageContentItems } from './styles';
import SideProfileOpen from '../../components/SideProfileOpen';
import Navbar from '../../components/Navbar';
import SideProfileClose from '../../components/SideProfileClose';
import Welcome from '../../components/Welcome';
import Footer from '../../components/Footer';
import InstructorMenu from '../../components/InstructorMenu';
import Card from '../../components/Card/cards';
import SideProfileOpenInstro from '../../components/SideProfileInstroOpen';


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

const InstructorHome = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);

    const toggleProfile = () => {
        setProfileOpen(prevState => !prevState);
    };

    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    {isProfileOpen ? (
                        <SideProfileOpenInstro toggleProfileInstro={toggleProfile} />
                    ) : (
                        <SideProfileClose toggleProfile={toggleProfile} />
                    )}
                    <TopContent>
                        <Welcome />
                        <InstructorMenu />
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
            </MainContainer>
        </>
    )
}

export default InstructorHome