import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle, ImgsIcon } from './styles';
import Banner from './components/Banner';
import CardStudents from './components/CardsStudents';
import EventModal from './components/Modal/index';
import icon from '/plus_circle.svg'
import SkillTableHeader from "./components/SkillTableHeader"
import SkillTable from "./components/SkillTable"

const studentsData = [
    { name: 'André Luis' },
    { name: 'Andrey Koch' },
    { name: 'Dayne Pacheco' },
    { name: 'Gabriela Laureano' },
    { name: 'Yasmim da Cunha' },
    { name: 'Nilton Meira' },
    { name: 'Jéssica Federal' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' },
    { name: 'Maria Carolina B.' }
];

const bannerData = [
    { name: 'Java Avançado', instructor: 'Leonardo Trevisan', color: '#f38a00', opacity: 0.2 } 
];

const CourseSkillsRegister = () => {
    const [showModal, setShowModal] = useState(false);
    const [skills, setSkills] = useState([]);
    const [bannerOpacity, setBannerOpacity] = useState(bannerData[0].opacity); // Inicializa com a opacidade definida no bannerData

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const addSkill = (newSkill) => {
        setSkills([...skills, newSkill]);
    };

    const deleteSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    const handleOpacityChange = (value) => {
        setBannerOpacity(value);
    };

    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    {bannerData.map((bannerDt, indexBn) => (
                        <Banner
                            key={indexBn}
                            name={bannerDt.name}
                            instructor={bannerDt.instructor}
                            color={bannerDt.color}
                            opacity={bannerOpacity} 
                        />
                    ))}

                    <LineDiv>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            padding: '8px',
                            paddingLeft: '120px',
                            alignItems: 'center',
                            gap: '10px',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                            onClick={openModal}
                        >
                            <ImgsIcon src={icon}></ImgsIcon>
                            <p style={{ fontWeight: '600', paddingTop: '1px' }}>Add Skill</p>
                        </div>
                        <Line />
                    </LineDiv>

                    {showModal && <EventModal event={{ title: 'Add a Skill', desc: 'Skill successfully added!', start: new Date(), end: new Date() }} onClose={closeModal} onAddSkill={addSkill} />}
                    <SkillTableHeader />
                    {skills.map((skill, index) => (
                        <SkillTable
                            key={index}
                            index={index}
                            description={skill.description}
                            weight={skill.weight}
                            onDelete={deleteSkill}
                        />
                    ))}

                    <LineDiv>
                        <SectionTitle>Students</SectionTitle>
                        <Line />
                    </LineDiv>
                    <CardsOutside>
                        <CardsContainer>
                            {studentsData.map((studentData, index) => (
                                <CardStudents
                                    key={index}
                                    name={studentData.name}
                                    style={index % 5 === 0 ? { clear: 'both' } : {}}
                                />
                            ))}
                        </CardsContainer>
                    </CardsOutside>

                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default CourseSkillsRegister;