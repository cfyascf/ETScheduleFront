import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SkillTable from "./components/SkillTable"
import StudentGraph from "./components/StudentGraph"
import StudentHeader from "./components/StudentHeader"
import { Line, PageContent, Select, SelectContainer, SkillsHeader } from "./styles"

const Student = () => {
    return (
        <>
            <Navbar />
            <StudentHeader />
            <PageContent>
                <StudentGraph />
                <SkillsHeader>
                    Competências
                    <Line></Line>
                </SkillsHeader>
                <SelectContainer>
                    <Select>
                        <option>Python</option>
                        <option>PowerBI</option>
                    </Select>
                </SelectContainer>
                <SkillTable/>
            </PageContent>
            <Footer />
        </>
    )
}

export default Student