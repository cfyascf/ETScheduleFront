import React, { useState } from 'react';
import { MainContainer, PageContent, TopContent } from './styles';
import SideProfileOpen from '../../components/SideProfileOpen';
import Navbar from '../../components/Navbar';
import SideProfileClose from '../../components/SideProfileClose';
import Welcome from '../../components/Welcome';
import Footer from '../../components/Footer';
import InstructorMenu from '../../components/InstructorMenu';

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
                        <InstructorMenu/>
                    </TopContent>
                </PageContent>

                <Footer />
            </MainContainer>
        </>
    )
}

export default InstructorHome