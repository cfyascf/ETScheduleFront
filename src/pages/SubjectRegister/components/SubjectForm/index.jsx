import { useState } from "react";
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea } from "./styles"
import { getHeaders } from "../../../../services/headers";
import api from "../../../../services/api";
import { useNavigate } from "react-router-dom";

const createCourse = async(body) => {
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

            // console.log(response)

            navigate('/instructor-home')

            // if(!response.ok)
            //     toast.error("Error posting data.")
            // else
            //     toast.success("Class created with sucess!")

        } catch (error) {
            toast.error("Error when registering", { 
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
    };

    return (
        <>
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

