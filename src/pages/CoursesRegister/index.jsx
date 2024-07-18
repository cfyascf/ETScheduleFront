import React from 'react';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Reg from "./components/Reg/formReg";
import { MainContainer, PageContent, Imgs } from "./styles";
import Person from "/person.png"

const CoursesReg = () => {
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

export default CoursesReg;