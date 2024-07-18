import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';

import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"
const options = ['DTA1', 'DTA2', 'TDS3'];


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
                        <ColoredText>REGISTER A EVENT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameevent">Name Event:</Label>
                            <Input id="nameevent" type="text" name="nameevent"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="nameclass">Name Class:</Label>
                            <Dropdown className='Dropdown' options={options} onChange={handleSelect} placeholder="Select an option" />
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

