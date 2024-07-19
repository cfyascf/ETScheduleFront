import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfileClose from "../../components/SideProfileClose"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu"
import GraphicBar from "../../components/GraphicBar/GraphicBar"
import { MainContainer, PageContent, TopContent, Information,AllGraphics, RadarContainer } from "./styles"
import GraphicRadarSoft from '../../components/GraphicRadarSoft/GraphicRadarSoft';
import GraphicRadarHard from '../../components/GraphicRadarHard/GraphicRadarHard';



const PersonalReport = () => {
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
                    <Information>
                        <TopContent>
                            <StudentMenu />
                        </TopContent>
                        <AllGraphics>
                            <RadarContainer>
                                <GraphicRadarSoft/>
                                <GraphicRadarHard/>
                            </RadarContainer>
                            <GraphicBar/>
                        </AllGraphics>
                    </Information>
                </PageContent>
                
                <Footer />
            </MainContainer>
        </>
    )
}

export default PersonalReport
