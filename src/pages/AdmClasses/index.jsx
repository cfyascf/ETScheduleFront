import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
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
import { getHeaders } from "../../services/headers";
import api from "../../services/api";


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

const AdmClasses = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        async function fetchGroups() {
            try {
                const response = await getAllGroups();
                setClasses(response.data);
            } catch (error) {
                console.error("Error fetching classes:", error);
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
                                    {classes.map(classes => (
                                        <Link key={classes.id} to={`/class/${classes.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <ClassCard
                                                key={classes.id}
                                                name={classes.name}

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