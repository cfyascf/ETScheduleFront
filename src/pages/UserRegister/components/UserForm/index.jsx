import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, CheckboxArea } from "./styles"

const RegisterForm = () => {
    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW USER</ColoredText>
                        <FormGroup>
                            <Label htmlFor="instructor">Username:</Label>
                            <Input id="instructor" type="text" name="instructorReg"></Input>
                            <Label htmlFor="instructor">Role:</Label>
                            <CheckboxArea>
                                <Input id="instructor" type="checkbox" name="instructorReg"></Input>
                                <Label htmlFor="instructor">Student</Label>
                                <Input id="instructor" type="checkbox" name="instructorReg"></Input>
                                <Label htmlFor="instructor">Instructor</Label>
                                <Input id="instructor" type="checkbox" name="instructorReg"></Input>
                                <Label htmlFor="instructor">Administrator</Label>
                            </CheckboxArea>
                        </FormGroup>
                    </FormItems>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default RegisterForm;

