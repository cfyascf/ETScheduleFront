
import { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputColor, InputDiv } from "./styles"
import { useEffect, useState } from "react";
import { getHeaders } from "../../../../services/headers";
import api from "../../../../services/api";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const getAllGroups = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/group",
        {
            headers: headers
        }
    );

    return response;
}

const getAllCourses = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/course",
        {
            headers: headers
        }
    );

    return response;
}

const createDiscipline = async(body) => {
    const headers = getHeaders();
    const response = await api.post(
        "/discipline",
        {
            headers: headers,
            body: body
        }
    );

    return response;
};

const getAllInstructors = async() => {
    const headers = getHeaders();
    const response = await api.get(
        "/instructor",
        {
            headers: headers
        }
    );

    console.log(response);

    return response;
}

const Reg = () => {
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);
    const [groups, setGroups] = useState([]);

    const [instructorId, setInstructorId] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [semester, setSemester] = useState(null);
    const [colorPick, setColorPick] = useState("");

    const getInstructorsAsync = async() => {
        const response = await getAllInstructors();
        setInstructors(response.data);
    };

    const getCoursesAsync = async() => {
        const response = await getAllCourses();
        setCourses(response.data);
    };

    const getGroupsAsync = async() => {
        const response = await getAllGroups();
        setGroups(response.data);
    }

    const postDiscipline = async() => {

        if(instructorId == null){
            toast.error("Instructor is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        if(courseId == null){
            toast.error("Course is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        if(groupId == null){
            toast.error("Group is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        if(semester == null){
            toast.error("Semester is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        const response = await createDiscipline({
            "groupId": Number(groupId),
            "instructorId": Number(instructorId),
            "courseId": Number(courseId),
            "semester": Number(semester),
            "colorCode": colorPick
        });

        if (response.status == 201) {
            Navigate("/home");
        }
    };

    useEffect(() => {
        getInstructorsAsync();
        getCoursesAsync();
        getGroupsAsync();

        setColorPick("#000000");
    }, []);
    
    useEffect(() => {
        if (instructors.length > 0)
            setInstructorId(instructors[0].profileId);
    }, [instructors]);
    
    useEffect(() => {
        if (courses.length > 0)
            setCourseId(courses[0].id);
    }, [courses])
    
    useEffect(() => {
        if (groups.length > 0)
            setGroupId(groups[0].id);
    }, [groups])

    return (
        <>
            <ToastContainer />
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A COURSE</ColoredText>
                        <FormGroup>
                            <Label htmlFor="instructor">Instructor:</Label>
                            <Select onChange={e => setInstructorId(e.target.value)}>
                                {
                                    instructors.map((i, index) => <option key={index} value={i.profileId}>{i.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="course">Course:</Label>
                            <Select onChange={e => setCourseId(e.target.value)}>
                                {
                                    courses.map((c, index) => <option key={index} value={c.id}>{c.name}</option>)
                                }
                            </Select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="group">Group:</Label>
                            <Select onChange={e => setGroupId(e.target.value)}>
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
