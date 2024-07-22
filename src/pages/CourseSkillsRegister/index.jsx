import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle, ImgsIcon } from './styles';
import Banner from './components/Banner';
import CardStudents from './components/CardsStudents';
import EventModal from './components/Modal/index';
import icon from '/plus_circle.svg'
import SkillTableHeader from "./components/SkillTableHeader"
import SkillTable from "./components/SkillTable"
import { getHeaders } from "../../services/headers";
import api from "../../services/api";

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
    { opacity: 0.2 }
];

const getDisciplineById = async (id) => {
    try {
        const headers = getHeaders();
        const response = await api.get(`/discipline/${id}`, { headers });
        return response.data; // Retorna apenas os dados da disciplina
    } catch (error) {
        console.error("Error fetching discipline:", error);
        throw error; // Trate o erro conforme necessário
    }
};

const CourseSkillsRegister = () => {
    const [showModal, setShowModal] = useState(false);
    const [skills, setSkills] = useState([]);
    const [bannerOpacity, setBannerOpacity] = useState(bannerData[0].opacity); 
    const [discipline, setDiscipline] = useState(null); 
    const { id } = useParams();

    useEffect(() => {
        const fetchDiscipline = async () => {
            try {
                const disciplineData = await getDisciplineById(id); 
                setDiscipline(disciplineData);
            } catch (error) {
                console.error("Error fetching discipline:", error);
            }
        };

        fetchDiscipline();
    }, []);

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
                    {discipline && (
                        <Banner
                            name={discipline.name}
                            instructor={discipline.instructor}
                            color={discipline.color}
                            opacity={bannerOpacity}
                        />
                    )}

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