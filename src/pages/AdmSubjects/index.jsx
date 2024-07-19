import { Link } from "react-router-dom";
import React, { useState } from 'react';
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

const subjectData = [
    { subject: 'Soluções Digitais 1' },
    { subject: 'Soluções Digitais 2' },
    { subject: 'TDS 1' },
    { subject: 'TDS 2' },
    { subject: 'TDS 3' },
    { subject: 'Análise de Dados' },
    { subject: 'Cibersistemas' }
]

const AdmSubject = () => {
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
                                    {subjectData.map((subjectData, index) => (
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }}
                                            to={"/class"}>
                                            <ClassCard
                                                key={index}
                                                class={subjectData.class}
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

export default AdmSubject