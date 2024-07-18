import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea } from "./styles"

const SubjectForm = () => {
    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW SUBJECT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="instructor">Name:</Label>
                            <Input id="subject-name" type="text" name="instructorReg"></Input>
                            <Label htmlFor="instructor">Description:</Label>
                            <TextArea id="subject-description" name="instructorReg"></TextArea>
                        </FormGroup>
                    </FormItems>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default SubjectForm;

