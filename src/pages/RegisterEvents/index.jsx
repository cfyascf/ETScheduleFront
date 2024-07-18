import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Reg from "./components/RegEvent/formEvent";
import { MainContainer, PageContent, Imgs } from "./styles";
import Person from "/robert-bosch-portrait-brille.svg"

const RegisterEvent = () => {
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

export default RegisterEvent;