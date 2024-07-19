
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, InputColor, InputDiv } from "./styles"

const Reg = () => {
    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A COURSE</ColoredText>
                        <FormGroup>
                            <Label htmlFor="instructor">Instructor:</Label>
                            <Input id="instructor" type="text" name="instructorReg"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="course">Course:</Label>
                            <Input id="course" type="text" name="courseReg"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="semester">Semester:</Label>
                            <Input id="semester" type="text" name="semesterReg"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="color-picker">Color:</Label>
                            <InputDiv>
                                <InputColor type="color" id="color-picker"></InputColor>
                            </InputDiv>
                        </FormGroup>
                    </FormItems>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;

// instrutor
// materia
// semestre
