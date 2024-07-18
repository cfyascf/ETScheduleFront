import React, { useState } from 'react';
import { MainContainer, PageContent, TopContent, CardsContainer, PageContentItems } from './styles';
import SideProfileOpen from '../../components/SideProfileOpen';
import Navbar from '../../components/Navbar';
import SideProfileClose from '../../components/SideProfileClose';
import Welcome from '../../components/Welcome';
import Footer from '../../components/Footer';
import InstructorMenu from '../../components/InstructorMenu';
import Card from '../../components/Card/cards';


const coursesData = [
    { course: 'Python', name: 'Donathan Ramalho' },
    { course: 'Power BI', name: 'Donathan Ramalho' },
    { course: 'Java', name: 'Leonardo Trevisan' },
    { course: 'Java Avançado', name: 'Leonardo Trevisan' },
    { course: 'C#', name: 'Leonardo Trevisan' },
    { course: 'IoT', name: 'Queila Lima' },
    { course: 'Comunicação', name: 'Queila Lima' },
    { course: 'Inglês', name: 'Queila Lima' }
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
                        <SideProfileOpen toggleProfile={toggleProfile} />
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