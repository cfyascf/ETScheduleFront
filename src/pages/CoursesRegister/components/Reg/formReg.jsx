
import { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputColor, InputDiv } from "./styles"
import { useEffect, useState } from "react";

import api from "../../../../services/api";
import { createCourse } from "../../../../services/courseService";

const Reg = () => {
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);

    const [instructorId, setInstructorId] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [semester, setSemester] = useState("");
    const [colorPick, setColorPick] = useState("");

    const getInstructorsAsync = async() => {
        const response = await api.get(
            "/api/v1/instructor"
        );

        setInstructors(response.data);
    };

    const getCoursesAsync = async() => {
        const response = await api.get(
            "api/v1/course"
        );

        setCourses(response.data);
    };

    const postDiscipline = () => {
        const response = createCourse({
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
                                    instructors.map(i => <option value={i.profileId}>{i.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="course">Course:</Label>
                            <Select value={courseId} onChange={e => setCourseId(e.target.value)}>
                                {
                                    courses.map(c => <option value={c.id}>{c.name}</option>)
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
                    <Button type="submit" onSubmit={postDiscipline}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;

// instrutor
// materia
// semestre
