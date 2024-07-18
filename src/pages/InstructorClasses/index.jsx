import Navbar from "../../components/Navbar";
import React, { useState } from 'react';
import { MainContainer, PageContent, TopContent, CardsContainer, PageContentItems } from "./styles";
import SideProfileOpen from "../../components/SideProfileOpen";
import SideProfileClose from "../../components/SideProfileClose";
import InstructorMenu from "../../components/InstructorMenu";
import Footer from "../../components/Footer";
import Card from "../../components/Card/cards";

const classData = [
    { class: 'Soluções Digitais 1' },
    { class: 'Soluções Digitais 2' },
    { class: 'TDS 1' },
    { class: 'TDS 2' },
    { class: 'TDS 3' },
    { class: 'Análise de Dados' },
    { class: 'Cibersistemas' }
]

const InstructorClasses = () => {
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
                        <InstructorMenu />
                        <PageContentItems>
                            <CardsContainer>
                                {classData.map((classData, index) => (
                                    <Card
                                        key={index}
                                        course={classData.class}
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

export default InstructorClasses