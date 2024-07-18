import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import UserForm from "./components/UserForm"
import { Imgs, MainContainer, PageContent } from "./styles"
import Person from "/female_working_on_computer_behind_purple.png"

const UserRegister = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    <Imgs src={Person} alt="Bosch Logo" />
                    <UserForm />
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default UserRegister