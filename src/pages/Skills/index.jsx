import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu"
import { MainContainer, PageContent } from "./styles"

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
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Skills