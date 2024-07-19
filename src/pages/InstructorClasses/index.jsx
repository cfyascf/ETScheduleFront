import Navbar from "../../components/Navbar";
import React, { useState } from 'react';
import { MainContainer, PageContent, TopContent, CardsContainer, PageContentItems } from "./styles";
import SideProfileOpenInstro from "../../components/SideProfileInstroOpen";
import SideProfileClose from "../../components/SideProfileClose";
import InstructorMenu from "../../components/InstructorMenu";
import Footer from "../../components/Footer";
import ClassCard from "./components/ClassCard/cards";

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
                        <SideProfileOpenInstro toggleProfileInstro={toggleProfile} />
                    ) : (
                        <SideProfileClose toggleProfile={toggleProfile} />
                    )}
                    <TopContent>
                        <InstructorMenu />
                        <PageContentItems>
                            <CardsContainer>
                                {classData.map((classData, index) => (
                                    <ClassCard
                                        key={index}
                                        class={classData.class}
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