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

    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>

                    <Banner />
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