import { useState } from "react";
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea } from "./styles"
import { getHeaders } from "../../../../services/headers";
import api from "../../../../services/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const createCourse = async (body) => {
    const headers = getHeaders();
    const response = await api.post(
        "/course",
        {
            headers: headers,
            body: body
        }
    );

    return response;
}

const SubjectForm = () => {
    const navigate = useNavigate();

    const [subjectName, setSubjectName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {

        if(subjectName == ''){
            toast.error("Name is required", { 
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

        if(description == ''){
            toast.error("Description is required", { 
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
        
    

        event.preventDefault()


        try {
            const response = await api.post('/course', {
                "name": subjectName,
                "description": description
            });

            const userInfo = parseJwt();
            if (response.status == 201) {
                toast.success("Subject created with sucess!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setTimeout(() => {
                    switch (userInfo['role']) {
                        case "admin":
                            navigate("/adm-home")
                            break
                        case "instructor":
                            navigate("/instructor-home")
                            break
                    }
                }, 2000);
            }
            else {
                toast.error("Error posting data.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            }

        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };

    function parseJwt() {
        var base64Url = localStorage.getItem('@AUTH').split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    return (
        <>
            <ToastContainer />
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW SUBJECT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="name">Name:</Label>
                            <Input id="subject-name" type="text" name="name" value={subjectName} onChange={e => setSubjectName(e.target.value)}></Input>
                            <Label htmlFor="description">Description:</Label>
                            <TextArea id="subject-description" name="description" value={description} onChange={e => setDescription(e.target.value)}></TextArea>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default SubjectForm;

