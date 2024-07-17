import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfileOpen from "../../components/SideProfileOpen"
import StudentMenu from "../../components/StudentMenu"
import { MainContainer, PageContent } from "./styles"

const Home = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    <SideProfileOpen />
                    <StudentMenu />
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home
