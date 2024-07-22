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
        event.preventDefault()

        console.log("oi",subjectName, description)

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
            console.error('Erro ao fazer requisição:', error);
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

