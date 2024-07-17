import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu"
import { MainContainer, PageContent, SkillsContent } from "./styles"
import CourseName from './components/CourseName';
import SkillTable from './components/SkillTable';

const Skills = () => {
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
                    <SkillsContent>
                        <CourseName />
                        <SkillTable />
                    </SkillsContent>
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Skills