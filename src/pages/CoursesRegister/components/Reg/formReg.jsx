
import { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputColor, InputDiv } from "./styles"
import { useEffect, useState } from "react";

import { getAllCourses } from "../../../../services/courseService";
import { getAllInstructors } from "../../../../services/instructorService";
import { getAllGroups } from "../../../../services/groupService";
import { createDiscipline } from "../../../../services/disciplineService";

const Reg = () => {
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);
    const [groups, setGroups] = useState([]);

    const [instructorId, setInstructorId] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [semester, setSemester] = useState("");
    const [colorPick, setColorPick] = useState("");

    const getInstructorsAsync = async() => {
        const response = await getAllInstructors();
        setInstructors(response.data);

        if (instructors.length != 0)
            setInstructorId(instructors[0].profileId);
    };

    const getCoursesAsync = async() => {
        const response = await getAllCourses();
        setCourses(response.data);

        if (courses.length != 0)
            setCourseId(courses[0].id);
    };

    const getGroupsAsync = async() => {
        const response = await getAllGroups();
        setGroups(response.data);

        if (groups.length != 0)
            setGroupId(groups[0].id);
    }

    const postDiscipline = async() => {
        const response = await createDiscipline({
            groupId: groupId,
            instructorId: instructorId,
            courseId: courseId,
            semester: semester,
            color: colorPick
        });
        console.log(response);
    };

    useEffect(() => {
        getInstructorsAsync();
        getCoursesAsync();
        getGroupsAsync();
    }, []);

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A COURSE</ColoredText>
                        <FormGroup>
                            <Label htmlFor="instructor">Instructor:</Label>
                            <Select value={instructorId} onChange={e => setInstructorId(e.target.value)}>
                                {
                                    instructors.map((i, index) => <option key={index} value={i.profileId}>{i.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="course">Course:</Label>
                            <Select value={courseId} onChange={e => setCourseId(e.target.value)}>
                                {
                                    courses.map((c, index) => <option key={index} value={c.id}>{c.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="group">Group:</Label>
                            <Select value={groupId} onChange={e => setGroupId(e.target.value)}>
                                {
                                    groups.map((g, index) => <option key={index} value={g.id}>{g.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="semester">Semester:</Label>
                            <Input id="semester" type="text" name="semesterReg" value={semester} onChange={e => setSemester(e.target.value)}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="color-picker">Color:</Label>
                            <InputDiv>
                                <InputColor type="color" id="color-picker" value={colorPick} onChange={e => setColorPick(e.target.value)}></InputColor>
                            </InputDiv>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={postDiscipline}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;

// instrutor
// materia
// semestre
