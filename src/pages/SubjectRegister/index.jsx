import { Imgs, MainContainer, PageContent } from "./styles"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SubjectForm from "./components/SubjectForm"
import Person from "/female_male_working_on_board_blue.png"

const SubjectRegister = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    <Imgs src={Person} alt="Bosch Logo" />
                    <SubjectForm />
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default SubjectRegister