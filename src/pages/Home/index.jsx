import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SideProfile from "../../components/SideProfile"
import {MainContainer} from "./styles"
import CalendarDate from "../../components/CalendarDate"



const Home = () => {
    return (
        <>
            <MainContainer>
                <Navbar />
                <SideProfile />
                <CalendarDate/>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Home
