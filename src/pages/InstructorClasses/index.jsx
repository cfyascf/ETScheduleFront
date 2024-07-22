import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import { MainContainer, PageContent, TopContent, CardsContainer, PageContentItems } from "./styles";
import SideProfileOpenInstro from "../../components/SideProfileInstroOpen";
import SideProfileClose from "../../components/SideProfileClose";
import InstructorMenu from "../../components/InstructorMenu";
import Footer from "../../components/Footer";
import ClassCard from "../../components/ClassCard/cards";
import { getHeaders } from "../../services/headers";
import api from "../../services/api";

const getAllGroups = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/group",
        {
            headers: headers
        }
    );

    return response;
}

const InstructorClasses = () => {
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
                        <SideProfileOpenInstro toggleProfileInstro={toggleProfile} />
                    ) : (
                        <SideProfileClose toggleProfile={toggleProfile} />
                    )}
                    <TopContent>
                        <InstructorMenu />
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
                </PageContent>

                <Footer />
            </MainContainer>
        </>
    )
}

export default InstructorClasses