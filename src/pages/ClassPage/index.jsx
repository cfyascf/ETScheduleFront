import { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle } from './styles';
import Banner from './components/Banner';
import CalendarDate from "../../components/CalendarDate"
import CardStudents from './components/CardsStudents';

import api from '../../services/api';
import { getHeaders } from '../../services/headers';
import { useParams } from 'react-router-dom';

const studentsData = []

const getCourseById = async (id) => {
    try {
        const headers = getHeaders();
        const response = await api.get(`/group/${id}`, { headers });
        return response.data; // Retorna apenas os dados da disciplina
    } catch (error) {
        console.error("Error fetching group:", error);
        throw error; // Trate o erro conforme necessário
    }
};

const Class = () => {
    // const [group, setGroup] = useState(null);
    // const [studentsData, setStudents] = useState([]);

    // const fetchAllCourses = async() => {
    //     const headers = getHeaders();
    //     const id = useParams().id;

    //     console.log(id);

    //     const response = await api.get(
    //         `/group/${id}`,
    //         {
    //             headers: headers
    //         }
    //     );

    //     console.log(response);
    //     return response;
    // }

    // useEffect(() => {
    //     const groupResponse = fetchAllCourses();
    //     setGroup(groupResponse.data);
    //     setStudents(groupResponse.data.students);
    // }, [])
    const [group, setGroup] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const groupData = await getCourseById(id);
                setGroup(groupData);
            } catch (error) {
                console.error("Error fetching group:", error);
            }
        };

        fetchGroup();
    }, []);

    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>

                    {group && (
                        <Banner
                            name={group.name}
                            instructor={group.instructor}
                            color={group.color}
                        />
                    )}

                    <LineDiv>
                        <SectionTitle>Class Schedule</SectionTitle>
                        <Line />
                    </LineDiv>
                    <CalendarDate />
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

export default Class;