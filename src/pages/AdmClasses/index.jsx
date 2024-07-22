import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileClose from "../../components/SideProfileClose";
import SideProfileADMOpen from '../../components/SideProfileADMOpen';
import AdmMenu from '../../components/AdmMenu';
import ClassCard from "../../components/ClassCard/cards";

import { CardsContainer, Information, MainContainer, PageContent, PageContentItems, TopContent } from "./styles";

import { getHeaders } from "../../services/headers";
import api from "../../services/api";

const AdmClasses = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [classes, setClasses] = useState([]);

    const getAllGroups = async () => {
        const headers = getHeaders();
        const response = await api.get(
            "/group",
            {
                headers: headers
            }
        );
    
        return response;
    }

    useEffect(() => {
        async function fetchGroups() {
            try {
                const response = await getAllGroups();
                setClasses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }

        fetchGroups();
    }, []);

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
                            <AdmMenu />
                            <PageContentItems>
                                <CardsContainer>
                                    {classes.map(classData  => (
                                        <Link
                                            key={classData.id}
                                            to={`/classes/${classData.id}`} 
                                            style={{ textDecoration: "none", color: "black" }}
                                        >
                                            <ClassCard
                                                key={classData.id}
                                                name={classData.name}

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

export default AdmClasses