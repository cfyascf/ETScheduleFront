import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Reg from "./components/RegClass/formReg";
import { MainContainer, PageContent, Imgs } from "./styles";
import Person from "/people_collection_blue.svg"

const RegisterClass = () => {
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

export default RegisterClass;