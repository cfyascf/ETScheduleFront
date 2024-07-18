import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer } from './styles';
import Banner from './components/Banner';
import CalendarDate from "../../components/CalendarDate"
import CardStudents from './components/CardsStudents';

const studentsData = [
    { name: 'Donathan Ramalho'},
    { name: 'Queila Lima'},
    { name: 'Leonardo Trevisan'},
    { name: 'Luis Hamilton'},
    { name: 'Alisson Ferro'},
    { name: 'Melissa Moll'},
    { name: 'Marcos Belizario'}
]

const Class = () => {
    return(
        <>
        <MainContainer>
            <Navbar />
                <PageContent>
                    <Banner />
                    <CalendarDate />
                    <Line/>
                    <CardsContainer>
                        {studentsData.map((studentData, index) => (
                            <CardStudents
                                key={index}
                                name={studentData.name}
                            />
                        ))}
                    </CardsContainer>
                </PageContent>
            <Footer />
        </MainContainer>
        </>
    ) 
}

export default Class;