import React, { useState } from 'react';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, CheckboxArea } from "./styles"
import Dropdown from 'react-dropdown';
import './style.css';



const RegisterForm = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const [isStudentChecked, setStudentChecked] = useState(false);

    const handleStudentCheckboxChange = () => {
        setStudentChecked(!isStudentChecked);

    };

    const handleSelect = (option) => {
        setSelectedOption(option);

        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A NEW USER</ColoredText>
                        <FormGroup>
                            <Label htmlFor="username">Username:</Label>
                            <Input id="username" type="text" name="username"></Input>
                            <Label htmlFor="role">Role:</Label>
                            <CheckboxArea>
                                <Input id="student" type="checkbox" name="role" onChange={handleStudentCheckboxChange}></Input>
                                <Label htmlFor="student">Student</Label>
                                <Input id="instructor" type="checkbox" name="role"></Input>
                                <Label htmlFor="instructor">Instructor</Label>
                                <Input id="administrator" type="checkbox" name="role"></Input>
                                <Label htmlFor="administrator">Administrator</Label>
                            </CheckboxArea>
                            {isStudentChecked && (
                                <>
                                    <Label htmlFor="select">Student Class:</Label>
                                    <Dropdown className='Dropdown' options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
                                </>
                            )}
                        </FormGroup>
                    </FormItems>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
        </>
    );
}

export default RegisterForm;
