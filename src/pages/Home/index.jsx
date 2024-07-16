import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfile from "../../components/SideProfile"
import {MainContainer} from "./styles"

const Home = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <SideProfile />
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home
