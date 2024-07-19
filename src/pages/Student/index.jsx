import React, { useState } from 'react';
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SkillTable from "./components/SkillTable"
import SkillTableHeader from "./components/SkillTableHeader"
import StudentGraph from "./components/StudentGraph"
import StudentHeader from "./components/StudentHeader"
import { Line, PageContent, Select, SelectContainer, SkillsHeader, TableContainer } from "./styles"

const skillsData = [
    { weight: '2', description: 'Esp. 32', result: '7.4', subject: "Python" },
    { weight: '2', description: 'Eshfsdhfi uidhfioushfui hdshfh huihuihdsurf hs huidfh', result: '7.4', subject: "PowerBI" },
    { weight: '2', description: 'Esp. 32', result: '7.4', subject: "Python" },
];

const Student = () => {
    const [filterParam, setFilterParam] = useState("All");

    const filteredSkillsData = skillsData.filter(skill => {
        if (filterParam === "All") {
            return true; 
        } else {
            return skill.subject === filterParam;
        }
    });

    return (
        <>
            <Navbar />
            <StudentHeader />
            <PageContent>
                <StudentGraph />
                <SkillsHeader>
                    Skills
                    <Line></Line>
                </SkillsHeader>
                <SelectContainer>
                    <Select
                        value={filterParam}
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}
                        className="custom-select"
                        aria-label="Filter by Discipline"
                    >
                        <option value="All">All</option>
                        <option value="Python">Python</option>
                        <option value="PowerBI">PowerBI</option>
                    </Select>
                </SelectContainer>
                <TableContainer>
                    <SkillTableHeader />
                    {filteredSkillsData.map((skill, index) => (
                        <SkillTable
                            key={index}
                            weight={skill.weight}
                            description={skill.description}
                            result={skill.result}
                        />
                    ))}
                </TableContainer>
            </PageContent>
            <Footer />
        </>
    )
}

export default Student;
