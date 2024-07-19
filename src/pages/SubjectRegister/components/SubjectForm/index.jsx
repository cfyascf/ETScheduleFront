import { useState } from "react";
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea } from "./styles"
import { createCourse } from "../../../../services/courseService";

const SubjectForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const postCourse = async() => {
        const response = await createCourse({
            name: name,
            description: description
        });

        console.log(response);
    };

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW SUBJECT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="name">Name:</Label>
                            <Input id="subject-name" type="text" name="name" value={name} onChange={e => setName(e.target.value)}></Input>
                            <Label htmlFor="description">Description:</Label>
                            <TextArea id="subject-description" name="description" value={description} onChange={e => setDescription(e.target.value)}></TextArea>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={postCourse}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default SubjectForm;

