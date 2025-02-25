import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Reg from "./components/RegLesson/formLesson";
import { MainContainer, PageContent, Imgs } from "./styles";
import Person from "/group-coaching-turquoise.svg"

const RegisterLesson = () => {
    return(
        <> 
        <MainContainer>
            <Navbar/>
                <PageContent>
                    <Imgs src={Person} alt="Bosch Logo"/> 
                    <Reg/>
                </PageContent>
            <Footer/>
        </MainContainer>
        </>
    )
}

export default RegisterLesson;