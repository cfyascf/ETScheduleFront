import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api'
import 'react-dropdown/style.css';
import './style.css';

import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText } from "./styles"

const Reg = () => {
    
    const navigate = useNavigate();

    // dropdown population
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    // data to send via post
    const [groupsId, setGroupsId] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // input data
    const [eventName, setEventName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [eventDescription, setEventDescription] = useState('')

    useEffect(() => {
        fetchOptions(); // Função para buscar as opções da API ao montar o componente
    }, []);

    const fetchOptions = async () => {
        try {
            const response = await api.get('/group')
            
            const groups = response.data.map(group => ({
                label: group.name
            }))

            const groupsId = response.data.map(group => ({
                value: group.id
            }))

            setOptions(groups)
            setGroupsId(groupsId)

        } catch (error) {
            console.error('Erro ao fazer requisição:', error)
        }
    }

    // when selected, gets option name and index
    const handleSelect = (option) => {
        setSelectedOption(option);

        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(startDate, endDate)

        // converts data to desired format
        const formattedStartDate = `${startDate}:00Z`;
        const formattedEndDate = `${endDate}:00Z`;

        console.log(formattedStartDate, formattedEndDate)

        if (!selectedOption) {
            console.error('Nenhuma opção selecionada.');
            return;
        }

        try {
            console.log("aqui")

            const response = await api.post('/event', {
                "groupId": groupsId[selectedIndex].value,
                "startsAt": formattedStartDate,
                "endsAt": formattedEndDate,
                "description": eventDescription
            });

            console.log(response);

            navigate('/instructor-home');

            // if(!response.ok)
            //     toast.error("Error posting data.")
            // else
            //     toast.success("Event registered successfully!");

        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
    };

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER AN EVENT</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameevent">Event name:</Label>
                            <Input type="text" value={eventName} onChange={(e) => { setEventName(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="nameclass">Class:</Label>
                            <Dropdown className='Dropdown' options={options} value={selectedOption} onChange={handleSelect} placeholder="Select an option" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start date and time:</Label>
                            <Input type="datetime-local" value={startDate} onChange={(e) => { setStartDate(e.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End date and time:</Label>
                            <Input type="datetime-local" value={endDate} onChange={(e) => { setEndDate(e.target.value) }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eventDescription">Event description:</Label>
                            <Input type="text" value={eventDescription} onChange={(e) => { setEventDescription(e.target.value) }}></Input>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;
