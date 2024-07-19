import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle, ImgsIcon } from './styles';
import Banner from './components/Banner';
import CardStudents from './components/CardsStudents';
import Table from './components/Table';
import icon from '/plus_circle.svg'

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

const tableData = [
    { description: 'Nome', value: 'João', color: 'green' },
    { description: 'Nome', value: 'João', color: 'green' }

  ];

const bannerData = [
    { name: 'Java Avançado', instructor: 'Leonardo Trevisan', color: 'orange' }
]

const CourseSkillsRegister = () => {
    return(
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
                            borderRadius: '10px'
                        }}>
                            <ImgsIcon src={icon}></ImgsIcon>
                            <p style={{ fontWeight: '600', paddingTop: '1px' }}>Add Skill</p>
                        </div>
                        <Line/>
                    </LineDiv>
                    {bannerData.map((bannerDT, index) => (
                        <Table
                            key={index}
                            color={bannerDT.color}
                            data={tableData}
                        />
                    ))}
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

export default CourseSkillsRegister;