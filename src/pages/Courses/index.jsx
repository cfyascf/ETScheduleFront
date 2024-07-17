import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SideProfileOpen from "../../components/SideProfileOpen";
import StudentMenu from "../../components/StudentMenu";
import Card from "./components/Card/cards";
import { MainContainer, PageContent, CardsContainer } from "./styles";

const Courses = () => {
    return (
        <>
            <Navbar />
            <PageContent>
                <SideProfileOpen />
                <StudentMenu />
                <CardsContainer>
                    <Card />
                    <Card />
                </CardsContainer>
            </PageContent>
                
            <Footer />
        </>
        
    );
};

export default Courses;
