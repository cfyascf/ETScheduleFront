import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"

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
                        </FormGroup>
                    </FormItems>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default RegisterForm;

