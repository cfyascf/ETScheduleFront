import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu"
import { DescriptionContent, MainContainer, PageContent, SkillsContent, Title } from "./styles"
import SubjectName from './components/SubjectName';
import SideProfileADMOpen from '../../components/SideProfileADMOpen';

const Subjects = () => {
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
                    <SkillsContent>
                        <SubjectName />
                        <DescriptionContent>
                            <Title>Descrição da matéria: </Title>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </DescriptionContent>
                    </SkillsContent>
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Subjects