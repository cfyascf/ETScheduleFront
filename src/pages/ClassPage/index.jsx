import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle } from './styles';
import Banner from './components/Banner';
import CalendarDate from "../../components/CalendarDate"
import CardStudents from './components/CardsStudents';

const studentsData = [
    { name: 'André Luis'},
    { name: 'Andrey Koch'},
    { name: 'Dayne Pacheco'},
    { name: 'Gabriela Laureano'},
    { name: 'Yasmim da Cunha'},
    { name: 'Nilton Meira'},
    { name: 'Jéssica Federal'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'},
    { name: 'Maria Carolina B.'}
]

const Class = () => {
    return(
        <>
        <MainContainer>
            <Navbar />
                <PageContent>
                    <Banner />
                    <LineDiv>
                        <SectionTitle>Class Schedule</SectionTitle>
                        <Line/>
                    </LineDiv>
                    <CalendarDate/>
                    <LineDiv>
                        <SectionTitle>Students</SectionTitle>
                        <Line/>
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