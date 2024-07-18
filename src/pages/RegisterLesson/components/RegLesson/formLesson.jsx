import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';


import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea} from "./styles"
const options = ['DTA1-IoT', 'DTA2-Excel', 'TDS3-C#'];


const Reg = () => {  
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A LESSON</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameevent">Name Discipline:</Label>
                            <Dropdown className='Dropdown' options={options} onChange={handleSelect} placeholder="Select an option" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description:</Label>
                            <TextArea id="description" name="description"></TextArea>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start Date:</Label>
                            <Input id="startdate" type="datetime-local" name="startdate"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End Date:</Label>
                            <Input id="enddate" type="datetime-local" name="enddate"></Input>
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
