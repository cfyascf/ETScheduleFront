import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfile from "../../components/SideProfile"
import StudentMenu from "../../components/StudentMenu"
import { MainContainer, PageContent } from "./styles"

const Home = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <PageContent>
                    <SideProfile />
                    <StudentMenu />
                </PageContent>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home
