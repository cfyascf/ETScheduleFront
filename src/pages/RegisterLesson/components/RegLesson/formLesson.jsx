import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.css';
import { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, TextArea} from "./styles"
import api from '../../../../services/api'
import { useNavigate } from 'react-router-dom';

const Reg = () => {  
    const navigate = useNavigate()
    
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedIndex, setSelectedIndex] = useState('')
    const [options, setOptions] = useState([])
    const [disciplinesId, setDisciplinesId] = useState([])

    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const fetchOptions = async () => {
        try {
            const response = await api.get('/discipline')
            
            const disciplines = response.data.map(discipline => ({
                label: discipline.name
            }))

            const disciplinesId = response.data.map(discipline => ({
                value: discipline.id
            }))

            setOptions(disciplines)
            setDisciplinesId(disciplinesId)

        } catch (error) {
            console.error('Erro ao fazer requisição:', error)
        }
    }

    useEffect(() => {
        fetchOptions(); // Função para buscar as opções da API ao montar o componente
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);

        const index = options.findIndex(item => item.label === option.label);
        setSelectedIndex(index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            console.log("aqui")

            const formattedStartDate = `${startDate}:00Z`;
            const formattedEndDate = `${endDate}:00Z`;

            console.log(disciplinesId[selectedIndex].value, selectedIndex, formattedStartDate, description)

            const response = await api.post('/event', {
                "disciplineId": disciplinesId[selectedIndex].value,
                "startsAt": formattedStartDate,
                "endsAt": formattedEndDate,
                "description": description
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
    }

    return (
        <>
            <FormContainer>
                <Forms>
                    <FormItems>
                        <ColoredText>REGISTER A LESSON</ColoredText>
                        <FormGroup>
                            <Label htmlFor="nameevent">Discipline:</Label>
                            <Dropdown className='Dropdown' options={options} onChange={handleSelect} value={selectedOption} placeholder="Select an option"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Description:</Label>
                            <TextArea id="description" value={description} onChange={(e) => { setDescription(e.target.value)}}></TextArea>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="startdate">Start Date:</Label>
                            <Input id="startdate" type="datetime-local" value={startDate} onChange={(e) => { setStartDate(e.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="enddate">End Date:</Label>
                            <Input id="enddate" type="datetime-local" value={endDate} onChange={(e) => { setEndDate(e.target.value)}}></Input>
                        </FormGroup>
                    </FormItems>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Forms>
            </FormContainer>
        </>
    )
}

export default Reg;

// instrutor
// materia
// semestre
